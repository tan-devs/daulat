<script lang="ts">
	import * as Breadcrumb from '$components/ui/breadcrumb/index.js';
	import { Separator } from '$components/ui/separator/index.js';
	import * as Sidebar from '$components/ui/sidebar/index.js';
	import { AppSidebar } from '$components/dash/sidebar';

	const metrics: { label: string; value: string; badge: string; badgeType: BadgeType }[] = [
		{
			label: 'Income this month',
			value: '₹1,24,000',
			badge: '+12% vs last month',
			badgeType: 'green'
		},
		{
			label: 'Expenses this month',
			value: '₹38,400',
			badge: 'Top: Software ₹12k',
			badgeType: 'amber'
		},
		{
			label: 'GST liability',
			value: '₹14,832',
			badge: 'Due Jun 20',
			badgeType: 'red'
		},
		{
			label: 'Advance tax due',
			value: '₹9,250',
			badge: 'Due Jun 15',
			badgeType: 'amber'
		}
	];

	const chartData = [
		{ month: 'Nov', income: 52, expense: 22 },
		{ month: 'Dec', income: 60, expense: 28 },
		{ month: 'Jan', income: 44, expense: 20 },
		{ month: 'Feb', income: 70, expense: 30 },
		{ month: 'Mar', income: 56, expense: 26 },
		{ month: 'Apr', income: 75, expense: 32 }
	];

	type BarColor = 'green' | 'amber';
	type BadgeType = 'green' | 'amber' | 'red';
	type InvoiceStatus = 'Paid' | 'Overdue' | 'Pending';

	const healthSignals: { label: string; pct: number; color: BarColor }[] = [
		{ label: 'Income stability', pct: 85, color: 'green' },
		{ label: 'Expense ratio', pct: 70, color: 'green' },
		{ label: 'Tax compliance', pct: 55, color: 'amber' },
		{ label: 'Savings rate', pct: 78, color: 'green' },
		{ label: 'Invoice collection', pct: 60, color: 'amber' }
	];

	const invoices: { client: string; date: string; amount: string; status: InvoiceStatus }[] = [
		{ client: 'Razorpay Technologies', date: 'Apr 14, 2026', amount: '₹48,000', status: 'Paid' },
		{ client: 'Groww Fintech', date: 'Apr 10, 2026', amount: '₹32,000', status: 'Overdue' },
		{ client: 'Zepto Commerce', date: 'Apr 6, 2026', amount: '₹44,000', status: 'Pending' }
	];

	const aiMessages: { role: 'bot' | 'user'; text: string }[] = [
		{
			role: 'bot',
			text: 'Your advance tax of ₹9,250 is due Jun 15. Based on your current income, I recommend paying by Jun 10 to avoid penalties.'
		},
		{ role: 'user', text: 'Should I register for GST?' },
		{
			role: 'bot',
			text: "Your YTD income is ₹4.8L. At your current pace you'll cross ₹20L by Nov — register by Oct to stay compliant."
		}
	];

	let aiInput = $state('');

	const badgeClass: Record<BadgeType, string> = {
		green: 'bg-emerald-50 text-emerald-800',
		amber: 'bg-amber-50 text-amber-800',
		red: 'bg-red-50 text-red-800'
	};

	const statusClass: Record<InvoiceStatus, string> = {
		Paid: 'bg-emerald-50 text-emerald-800',
		Overdue: 'bg-red-50 text-red-800',
		Pending: 'bg-amber-50 text-amber-800'
	};

	const barColor: Record<BarColor, string> = {
		green: 'bg-emerald-500',
		amber: 'bg-amber-400'
	};
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
			<Sidebar.Trigger class="-ms-1" />
			<Separator orientation="vertical" class="me-2 h-4" />
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item class="hidden md:block">
						<Breadcrumb.Link href="##">FinSight</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator class="hidden md:block" />
					<Breadcrumb.Item>
						<Breadcrumb.Page>Dashboard</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</header>

		<div class="flex flex-1 flex-col gap-4 p-4">

			<!-- Top bar -->
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-lg font-medium">Good morning, Aditya</h1>
					<p class="text-muted-foreground text-sm">FY 2025–26 · April 18, 2026</p>
				</div>
				<button
					class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm flex items-center gap-2 px-3 py-2 rounded-md transition-colors"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
						<circle cx="8" cy="8" r="6" stroke="white" stroke-width="1.2" />
						<path d="M5.5 8.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5" stroke="white" stroke-width="1.2" stroke-linecap="round" />
					</svg>
					Ask AI advisor
				</button>
			</div>

			<!-- Metric cards -->
			<div class="grid auto-rows-min gap-4 md:grid-cols-4">
				{#each metrics as m}
					<div class="bg-card border rounded-xl p-4">
						<p class="text-muted-foreground text-xs mb-1">{m.label}</p>
						<p class="text-2xl font-medium">{m.value}</p>
						<span class="inline-block mt-1 text-xs px-2 py-0.5 rounded-full {badgeClass[m.badgeType]}">
							{m.badge}
						</span>
					</div>
				{/each}
			</div>

			<!-- Middle row: chart + health score -->
			<div class="grid gap-4 md:grid-cols-2">

				<!-- Income vs Expenses bar chart -->
				<div class="bg-card border rounded-xl p-4">
					<p class="text-sm font-medium mb-3">Income vs expenses — last 6 months</p>
					<div class="flex items-end gap-2 h-24">
						{#each chartData as col}
							<div class="flex-1 flex flex-col items-center gap-0.5">
								<div
									class="w-full rounded-t-sm bg-emerald-500"
									style="height: {col.income}px;"
								></div>
								<div
									class="w-full rounded-t-sm bg-emerald-100 border border-emerald-200"
									style="height: {col.expense}px;"
								></div>
								<span class="text-[10px] text-muted-foreground mt-1">{col.month}</span>
							</div>
						{/each}
					</div>
					<div class="flex gap-4 mt-3">
						<div class="flex items-center gap-1.5 text-xs text-muted-foreground">
							<div class="w-2.5 h-2.5 rounded-sm bg-emerald-500"></div>
							Income
						</div>
						<div class="flex items-center gap-1.5 text-xs text-muted-foreground">
							<div class="w-2.5 h-2.5 rounded-sm bg-emerald-100 border border-emerald-200"></div>
							Expenses
						</div>
					</div>
				</div>

				<!-- Financial health score -->
				<div class="bg-card border rounded-xl p-4">
					<p class="text-sm font-medium mb-3">Financial health score</p>
					<div class="flex items-center gap-5">
						<div class="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center shrink-0">
							<span class="text-xl font-medium text-emerald-700">74</span>
						</div>
						<div class="flex-1 flex flex-col gap-1.5">
							{#each healthSignals as s}
								<div class="flex items-center justify-between gap-3 text-xs text-muted-foreground">
									<span class="w-32 shrink-0">{s.label}</span>
									<div class="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
										<div class="h-full rounded-full {barColor[s.color]}" style="width: {s.pct}%;"></div>
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Bottom row: invoices + AI advisor -->
			<div class="grid gap-4 md:grid-cols-3 md:min-h-min flex-1">

				<!-- Recent invoices -->
				<div class="bg-card border rounded-xl p-4 md:col-span-2">
					<p class="text-sm font-medium mb-3">Recent invoices</p>
					<div class="flex flex-col divide-y">
						{#each invoices as inv}
							<div class="flex items-center justify-between py-2.5">
								<div>
									<p class="text-sm font-medium">{inv.client}</p>
									<p class="text-xs text-muted-foreground mt-0.5">{inv.date}</p>
								</div>
								<div class="text-right flex flex-col items-end gap-1">
									<p class="text-sm font-medium">{inv.amount}</p>
									<span class="text-xs px-2 py-0.5 rounded-full {statusClass[inv.status]}">
										{inv.status}
									</span>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- AI advisor -->
				<div class="bg-card border rounded-xl p-4 flex flex-col gap-2">
					<p class="text-sm font-medium mb-1">AI advisor</p>
					<div class="flex flex-col gap-2 flex-1">
						{#each aiMessages as msg}
							{#if msg.role === 'bot'}
								<div class="bg-emerald-50 text-emerald-900 text-xs rounded-lg px-3 py-2 leading-relaxed">
									{msg.text}
								</div>
							{:else}
								<div class="bg-muted text-muted-foreground text-xs rounded-lg px-3 py-2 leading-relaxed">
									{msg.text}
								</div>
							{/if}
						{/each}
					</div>
					<div class="flex gap-2 mt-2">
						<input
							bind:value={aiInput}
							placeholder="Ask anything about your finances..."
							class="flex-1 text-xs border rounded-md px-3 py-1.5 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-emerald-500"
						/>
						<button
							class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-1.5 rounded-md transition-colors"
						>
							Ask
						</button>
					</div>
				</div>
			</div>

		</div>
	</Sidebar.Inset>
</Sidebar.Provider>