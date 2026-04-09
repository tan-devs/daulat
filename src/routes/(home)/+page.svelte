<section class="grid grid-cols-2 p-16 pt-2 relative justify-between gap-16">
	<article class="rounded-16xl bg-card p-10 relative overflow-hidden flex flex-col h-full gap-12">
		<div class="flex flex-col gap-6">
			<h1 class="font-sans text-7xl font-bold leading-tight">
				Secure &<br />Easy-to-Use<br />Crypto Wallet
			</h1>
			<p class="text-muted-foreground text-sm leading-relaxed">
				Store, Send & Receive<br />Cryptocurrencies with Confidence
			</p>
		</div>

		<button
			aria-label="get started"
			class="bg-accent text-accent-foreground font-sans font-semibold text-sm px-8 py-4 rounded-md w-fit cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-2"
		>
			Get Started <span class="text-base">↗</span>
		</button>

		<div class="flex items-center gap-8">
			<button
				aria-label="app store"
				class="flex items-center gap-2 border border-border text-foreground font-sans text-sm px-8 py-4 rounded-xl cursor-pointer hover:bg-muted transition-colors"
			>
				App Store <span>🍎</span>
			</button>
			<button
				aria-label="google play"
				class="flex items-center gap-2 border border-border text-foreground font-sans text-sm px-8 py-4 rounded-xl cursor-pointer hover:bg-muted transition-colors"
			>
				Google Play <span class="text-base">▶</span>
			</button>
		</div>
	</article>

	<article
		class="rounded-16xl bg-primary relative overflow-hidden p-10 pb-0 flex flex-col h-full gap-12 items-center justify-center"
	>
		<!-- Portfolio floating card -->
		<div class="absolute top-8 left-8 bg-white/60 backdrop-blur-md rounded-2xl px-5 py-4 z-20">
			<p class="text-sm mb-1">My portfolio</p>
			<p class="text-2xl font-mono pt-8">7,565.08 XLM</p>
			<p class="text-sm pt-4">
				$3 005,98 → $3 251,27 <span class="text-green-500 font-semibold ml-1">+8.19%</span>
			</p>
		</div>

		<div class="absolute h-full flex justify-center">
			<!-- Phone image -->
			<img
				src="/phone.png"
				alt="App screenshot"
				class="relative translate-y-36 object-contain drop-shadow-2xl"
			/>
		</div>
	</article>

	<!-- Bottom label -->
	<span
		class="absolute bottom-6 right-6 font-sans font-bold uppercase tracking-widest text-right leading-snug text-primary-foreground opacity-70"
	>
		CREATE YOUR WALLET<br />WITH EASE
	</span>

	<!-- Circular "Learn more" badge -->
	<div
		class="notch-l-card absolute bottom-0 left-1/2 -translate-x-1/2 w-68 h-68 flex items-center justify-center z-20"
	>
		<svg
			class="absolute inset-0 w-full h-full animate-spin"
			viewBox="0 0 96 96"
			style="animation-duration: 10s;"
		>
			<defs>
				<path id="textcircle" d="M 48,14 a 34,34 0 1,1 0,68 a 34,34 0 1,1 0,-68" />
			</defs>
			<text
				font-size="8"
				fill="currentColor"
				font-family="monospace"
				letter-spacing="1.1"
				dominant-baseline="middle"
			>
				<textPath href="#textcircle">Learn more • Learn more • Learn more •</textPath>
			</text>
		</svg>

		<!-- Center Icon: Using an SVG -->
		<div class="w-64 h-64 rounded-full flex items-center justify-center z-10">
			<svg
				xmlns="http://w3.org"
				class="w-16 h-16 text-foreground"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
			</svg>
		</div>
	</div>
</section>