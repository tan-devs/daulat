<section class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
	<div class="px-5 py-4 border-b border-border flex items-center justify-between">
		<h2 class="text-sm font-semibold text-foreground">Expenses</h2>
		<span class="text-xs text-muted-foreground">0 entries</span>
	</div>
	<div class="overflow-x-auto">
		<table class="min-w-full text-sm">
			<thead>
				<tr class="bg-muted/40 text-muted-foreground text-xs uppercase tracking-wide">
					<th class="text-left px-5 py-3 font-medium">Date</th>
					<th class="text-left px-5 py-3 font-medium">Description</th>
					<th class="text-left px-5 py-3 font-medium">Category</th>
					<th class="text-right px-5 py-3 font-medium">Amount</th>
					<th class="px-5 py-3"></th>
				</tr>
			</thead>
			<tbody>
				<tr class="border-t border-border hover:bg-muted/30 transition-colors">
					<td class="px-5 py-3 text-muted-foreground font-mono text-xs">2025-09-25</td>
					<td class="px-5 py-3 text-foreground font-medium">Groceries</td>
					<td class="px-5 py-3">
						<span
							class="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-medium text-primary"
						>
							Food
						</span>
					</td>
					<td class="px-5 py-3 text-right font-semibold text-foreground">$25.00</td>
					<td class="px-5 py-3 text-right">
						<button
							class="text-destructive hover:bg-destructive/10 text-xs border border-destructive/20 px-3 py-1 rounded-md transition-colors"
						>
							Delete
						</button>
					</td>
				</tr>
				<tr class="border-t border-border">
					<td
						colspan="5"
						class="px-5 py-10 text-center text-muted-foreground text-sm bg-muted-background/60"
					>
						<div class="flex flex-col items-center gap-2">
							<span class="text-2xl">🧾</span>
							<span>No expenses yet — add your first one above.</span>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
