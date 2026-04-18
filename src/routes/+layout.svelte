<script lang="ts">
	import '../app.css';

	import { ClerkProvider } from 'svelte-clerk';

	import favicon from '$lib/assets/favicon.svg';

	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	setupConvex(PUBLIC_CONVEX_URL);

	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} /><title>Daulat</title>
</svelte:head>

<!--html-->

<ClerkProvider>
	<ModeWatcher />
	{@render children()}
</ClerkProvider>
