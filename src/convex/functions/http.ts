// convex/http.ts
import { httpRouter } from 'convex/server';
import { httpAction } from './_generated/server';
import { internal } from './_generated/api';
import { Webhook } from 'svix';

const http = httpRouter();

http.route({
	path: '/clerk',
	method: 'POST',
	handler: httpAction(async (ctx, request) => {
		const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
		if (!webhookSecret) throw new Error('CLERK_WEBHOOK_SECRET not set');

		// Verify the webhook signature using svix
		const svix_id = request.headers.get('svix-id');
		const svix_timestamp = request.headers.get('svix-timestamp');
		const svix_signature = request.headers.get('svix-signature');

		const body = await request.text();
		const wh = new Webhook(webhookSecret);

		type ClerkWebhookEvent = {
			type: string;
			data: {
				id: string;
				email_addresses: { email_address: string }[];
				first_name?: string;
				last_name?: string;
				image_url: string;
			};
		};

		let event: ClerkWebhookEvent;
		try {
			event = wh.verify(body, {
				'svix-id': svix_id!,
				'svix-timestamp': svix_timestamp!,
				'svix-signature': svix_signature!
			}) as ClerkWebhookEvent;
		} catch {
			return new Response('Invalid webhook signature', { status: 400 });
		}

		// Handle the event
		const { type, data } = event;

		if (type === 'user.created' || type === 'user.updated') {
			await ctx.runMutation(internal.users.upsertUser, {
				clerkId: data.id,
				email: data.email_addresses[0]?.email_address ?? '',
				name: `${data.first_name ?? ''} ${data.last_name ?? ''}`.trim(),
				imageUrl: data.image_url
			});
		}

		if (type === 'user.deleted') {
			await ctx.runMutation(internal.users.deleteUser, {
				clerkId: data.id
			});
		}

		return new Response(null, { status: 200 });
	})
});

export default http;
