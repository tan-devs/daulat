<script lang="ts">
	import BadgeCheckIcon from '@lucide/svelte/icons/badge-check';
	import BellIcon from '@lucide/svelte/icons/bell';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import CreditCardIcon from '@lucide/svelte/icons/credit-card';
	import LogOutIcon from '@lucide/svelte/icons/log-out';
	import SparklesIcon from '@lucide/svelte/icons/sparkles';
	import * as Avatar from '$components/ui/avatar/index.js';
	import * as DropdownMenu from '$components/ui/dropdown-menu/index.js';
	import * as Sidebar from '$components/ui/sidebar/index.js';
	import { useSidebar } from '$components/ui/sidebar/index.js';
	import { useClerkContext } from 'svelte-clerk/client';
	const sidebar = useSidebar();

	// Do not destructure — breaks Svelte Runes reactivity
	const ctx = useClerkContext();

	const user = $derived(ctx.user);
	const fullName = $derived(user?.fullName ?? user?.firstName ?? user?.username ?? 'User');
	const email = $derived(user?.primaryEmailAddress?.emailAddress ?? '');
	const avatar = $derived(user?.imageUrl ?? '');
	// Initials fallback for Avatar.Fallback
	const initials = $derived(
		fullName
			.split(' ')
			.map((n: string) => n[0])
			.join('')
			.slice(0, 2)
			.toUpperCase()
	);
</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						{#if user === undefined}
							<!-- Loading skeleton -->
							<div class="size-8 animate-pulse rounded-lg bg-sidebar-accent"></div>
							<div class="grid flex-1 gap-1">
								<div class="h-3 w-24 animate-pulse rounded bg-sidebar-accent"></div>
								<div class="h-2 w-32 animate-pulse rounded bg-sidebar-accent"></div>
							</div>
						{:else}
							<Avatar.Root class="size-8 rounded-lg">
								<Avatar.Image src={avatar} alt={fullName} />
								<Avatar.Fallback class="rounded-lg">{initials}</Avatar.Fallback>
							</Avatar.Root>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<span class="truncate font-medium">{fullName}</span>
								<span class="truncate text-xs">{email}</span>
							</div>
						{/if}
						<ChevronsUpDownIcon class="ms-auto size-4" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>

			<DropdownMenu.Content
				class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
				side={sidebar.isMobile ? 'bottom' : 'right'}
				align="end"
				sideOffset={4}
			>
				<DropdownMenu.Label class="p-0 font-normal">
					<div class="flex items-center gap-2 px-1 py-1.5 text-start text-sm">
						<Avatar.Root class="size-8 rounded-lg">
							<Avatar.Image src={avatar} alt={fullName} />
							<Avatar.Fallback class="rounded-lg">{initials}</Avatar.Fallback>
						</Avatar.Root>
						<div class="grid flex-1 text-start text-sm leading-tight">
							<span class="truncate font-medium">{fullName}</span>
							<span class="truncate text-xs">{email}</span>
						</div>
					</div>
				</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<SparklesIcon />
						Upgrade to Pro
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<BadgeCheckIcon />
						Account
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CreditCardIcon />
						Billing
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<BellIcon />
						Notifications
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<LogOutIcon />
					Log out
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
