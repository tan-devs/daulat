<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
</script>

<header class="flex items-center justify-between text-card-foreground px-4 pt-4">
	<div id="logo" class="flex items-center gap-2">
		<img src={favicon} alt="logo" class="w-8 h-8" /><span>Daulat</span>
	</div>
	<nav class="absolute left-1/2 -translate-x-1/2">
		<ul class="flex gap-8">
			<li>About us</li>
			<li>Reviews</li>
			<li>Blog</li>
		</ul>
	</nav>
	<button
		class="bg-foreground text-background text-sm font-medium p-4 rounded-2xl hover:opacity-90 transition-opacity cursor-pointer"
	>
		Download App
	</button>
</header>
