<script>
	import Breadcrumbs from './Breadcrumbs.svelte';
	import { Separator } from '$components/ui/separator/index.js';
	import * as Sidebar from '$components/ui/sidebar/index.js';
</script>

<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
	<Sidebar.Trigger class="-ms-1" />
	<Separator orientation="vertical" class="me-2 h-4" />
	<Breadcrumbs />
</header>
