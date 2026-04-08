<script>
	import { Hero } from '$components/app';
	import Chart from '$components/app/Chart.svelte';
	import Expense from '$components/app/Expense.svelte';
	import Table from '$components/app/Table.svelte';
	import Total from '$components/app/Total.svelte';
</script>

<main class="mx-auto max-w-6xl px-4 py-8 space-y-6">
	<header class="mb-8">
		<Hero />
	</header>

	<section class="rounded-lg border border-border bg-card p-5">
		<Expense />
	</section>

	<section>
		<Total />
	</section>

	<section class="rounded-lg border border-border bg-card p-5">
		<Table />
	</section>

	<section class="rounded-lg border border-border bg-card p-5">
		<Chart />
	</section>
</main>
