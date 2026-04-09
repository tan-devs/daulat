<script lang="ts">
	import Button from '$components/ui/button/button.svelte';

	let { src } = $props();
</script>

<Button variant="link" class="text-foreground" href="https://github.com/tan-devs/daulat">
	<img {src} alt="logo" class="w-12 h-12" /><span class="text-2xl">Daulat</span>
</Button>
