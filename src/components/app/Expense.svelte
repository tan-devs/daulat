<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
	<!-- Filters -->
	<section class="lg:col-span-2 rounded-xl border border-border bg-card p-5 shadow-sm">
		<h2 class="text-sm font-semibold text-foreground mb-4">Filters</h2>
		<form class="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
			<label class="text-sm">
				<span class="block mb-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>Start</span
				>
				<input
					type="date"
					class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
				/>
			</label>
			<label class="text-sm">
				<span class="block mb-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>End</span
				>
				<input
					type="date"
					class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
				/>
			</label>
			<label class="text-sm md:col-span-2">
				<span class="block mb-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>Category</span
				>
				<select
					class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
				>
					<option value="">All categories</option>
					<option>Food</option>
					<option>Transport</option>
					<option>Utilities</option>
				</select>
			</label>
			<div class="flex gap-2">
				<button
					class="flex-1 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
					type="submit"
				>
					Apply
				</button>
				<button
					type="button"
					class="flex-1 rounded-lg border border-border bg-background text-foreground px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
				>
					Reset
				</button>
			</div>
		</form>

		<!-- Total -->
		<div class="mt-5 flex items-center gap-3 pt-4 border-t border-border">
			<span class="text-sm font-medium text-muted-foreground">Filtered total:</span>
			<span
				class="inline-flex items-center rounded-lg border border-ring bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground"
			>
				$0.00
			</span>
			<div
				class="ml-auto text-xs text-accent-foreground hover:underline underline-offset-2 transition"
			>
				Export CSV →
			</div>
		</div>
	</section>

	<!-- Add Expense -->
	<section class="rounded-xl border border-border bg-card p-5 shadow-sm">
		<h2 class="text-sm font-semibold text-foreground mb-4">Add Expense</h2>
		<form method="post" class="space-y-3">
			<label class="block text-sm">
				<span class="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>Description</span
				>
				<input
					name="description"
					placeholder="e.g., Groceries"
					class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
				/>
			</label>
			<div class="grid grid-cols-2 gap-3">
				<label class="block text-sm">
					<span
						class="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wide"
						>Amount</span
					>
					<input
						name="amount"
						type="number"
						step="0.01"
						min="0.01"
						placeholder="0.00"
						class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
					/>
				</label>
				<label class="block text-sm">
					<span
						class="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wide"
						>Date</span
					>
					<input
						name="date"
						type="date"
						class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
					/>
				</label>
			</div>
			<label class="block text-sm">
				<span class="mb-1.5 block text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>Category</span
				>
				<select
					class="w-full rounded-lg bg-background border border-input px-3 py-2 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
				>
					<option>Food</option>
					<option>Transport</option>
					<option>Rent</option>
					<option>Utilities</option>
				</select>
			</label>
			<button
				class="w-full rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors mt-1"
				type="submit"
			>
				Add Expense
			</button>
		</form>
	</section>
</div>
