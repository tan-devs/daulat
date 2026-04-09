<script lang="ts">
	import { Navmenu, Logo } from '$components/header';

	import { Button } from '$components/ui/button';

	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} /><title>Daulat</title>
</svelte:head>

<!--html-->

<header class="sticky top-0 z-50 flex items-center justify-between text-card-foreground px-16">
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
		<Button class="bg-foreground text-background text-sm font-medium hover:text-foreground">
			Download App
		</Button>
	</div>
</header>

{@render children()}