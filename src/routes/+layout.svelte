<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	import { Navbar } from '$components/app';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} /><title>Daulat</title>
</svelte:head>

<!--html-->

<Navbar />

{@render children()}
