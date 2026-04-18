<script lang="ts">
	import { Navmenu, Logo } from '$components/header';

	import { ClerkProvider } from 'svelte-clerk';
	import { Show, SignInButton, UserButton } from 'svelte-clerk';

	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';


	let { children } = $props();
	
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<link rel="icon" href={favicon} /><title>Daulat</title>
</svelte:head>

<!--html-->

<ClerkProvider>
	<header
		class="sticky top-0 z-50 flex items-center justify-between text-card-foreground px-2 py-2"
	>
		<!--left-->
		<div id="logo" class="flex items-center gap-2 backdrop-blur-sm rounded-4xl px-2 h-full">
			<Logo src={favicon} />
		</div>
		<!--center-->
		<nav class="absolute left-1/2 -translate-x-1/2 backdrop-blur-sm rounded-4xl px-2 h-full">
			<Navmenu />
		</nav>

		<!--right-->
		<div id="link" class="flex items-center gap-2 h-full">
			<Show when="signed-out">
				<SignInButton
					class="hover:bg-primary/80 bg-foreground text-background text-sm font-medium hover:text-foreground h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
				/>
			</Show>
			<Show when="signed-in">
				<UserButton />
			</Show>
		</div>
	</header>

	{@render children()}
</ClerkProvider>
