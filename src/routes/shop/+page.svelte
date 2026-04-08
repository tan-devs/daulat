<section class="grid grid-cols-2 gap-4 p-4 relative">
	<article class="bg-card rounded-16xl p-10 flex flex-col">
		<div class="flex flex-col gap-6">
			<h1 class="font-sans text-5xl font-bold leading-tight">
				Secure &<br />Easy-to-Use<br />Crypto Wallet
			</h1>
			<p class="text-muted-foreground text-sm leading-relaxed">
				Store, Send & Receive<br />Cryptocurrencies with Confidence
			</p>
		</div>
		<button
			aria-label="get started"
			class="bg-accent text-accent-foreground font-sans font-semibold text-sm px-6 py-3 rounded-md w-fit cursor-pointer hover:opacity-90 transition-opacity mt-10 flex items-center gap-2"
		>
			Get Started <span class="text-base">↗</span>
		</button>
		<div class="flex items-center gap-3 mt-auto">
			<button
				aria-label="app store"
				class="flex items-center gap-2 border border-border text-foreground font-sans text-sm px-5 py-3 rounded-xl cursor-pointer hover:bg-muted transition-colors"
			>
				App Store <span>🍎</span>
			</button>
			<button
				aria-label="google play"
				class="flex items-center gap-2 border border-border text-foreground font-sans text-sm px-5 py-3 rounded-xl cursor-pointer hover:bg-muted transition-colors"
			>
				Google Play <span class="text-base">▶</span>
			</button>
		</div>
	</article>

	<article class="bg-primary rounded-16xl relative overflow-hidden flex items-end justify-center">
		<!-- Portfolio floating card -->
		<div class="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 z-20">
			<p class="text-xs text-gray-500 mb-1">My portfolio</p>
			<p class="text-xl font-bold text-gray-900 font-mono">7,565.08 XLM</p>
			<p class="text-xs text-gray-400 mt-1">
				$3 005,98 → $3 251,27 <span class="text-green-500 font-semibold ml-1">+8.19%</span>
			</p>
		</div>

		<!-- Bottom label -->
		<span
			class="absolute bottom-6 right-6 font-sans font-bold text-xs uppercase tracking-widest text-right leading-snug text-primary-foreground opacity-70"
		>
			CREATE YOUR WALLET<br />WITH EASE
		</span>
	</article>

	<!-- Circular "Learn more" badge — positioned at the seam -->
	<div
		class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 flex items-center justify-center z-20"
	>
		<svg
			class="absolute inset-0 w-full h-full animate-spin z-20"
			viewBox="0 0 96 96"
			style="animation-duration: 10s;"
		>
			<defs>
				<path id="textcircle" d="M 48,48 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
			</defs>
			<text font-size="8.5" fill="currentColor" font-family="monospace" letter-spacing="1.5">
				<textPath href="#textcircle">Learn more • Learn more • Learn more •</textPath>
			</text>
		</svg>
		<div
			class="w-40 h-40 rounded-full flex items-center justify-center z-10"
		>
			<span class="text-foreground text-lg">↓</span>
		</div>
	</div>
</section>
