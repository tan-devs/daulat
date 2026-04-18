<script>
	import * as Breadcrumb from '$components/ui/breadcrumb/index.js';
	import { useClerkContext } from 'svelte-clerk/client';

	const ctx = useClerkContext(); // Don't destructure — breaks reactivity
	const user = $derived(ctx.user);
	const displayName = $derived(user?.fullName ?? user?.firstName ?? user?.username ?? 'User');
</script>

<Breadcrumb.Root>
	<Breadcrumb.List
		><Breadcrumb.Item>
			<Breadcrumb.Page>
				{#if user === undefined}
					Loading...
				{:else if user === null}
					Guest
				{:else}
					{displayName}
				{/if}
			</Breadcrumb.Page>
		</Breadcrumb.Item>
		<Breadcrumb.Separator class="hidden md:block" />
		<Breadcrumb.Item class="hidden md:block">
			<Breadcrumb.Link href="/dash">dashboard</Breadcrumb.Link>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>
