<script>
	import { Learnmore, Yellowcard, Whitecard } from '$components/home';
</script>

<section class="grid grid-cols-2 p-16 pt-2 relative justify-between gap-16">
	<article class="rounded-16xl bg-card p-10 relative overflow-hidden flex flex-col h-full gap-12">
		<Whitecard />
	</article>

	<article
		class="rounded-16xl bg-primary relative overflow-hidden p-10 pb-0 flex flex-col h-full gap-12 items-center justify-center"
	>
		<Yellowcard />
	</article>

	<!-- Bottom label -->
	<div class="absolute bottom-16 p-4 right-6 notch-l-card rounded-tl-16xl bg-background">
		<span
			class="block text-right font-sans font-bold uppercase tracking-widest leading-snug text-primary-foreground opacity-70"
		>
			CREATE YOUR WALLET<br />WITH EASE
		</span>
	</div>
	<!-- Circular "Learn more" badge -->
	<div
		class="notch-l-card rounded-16xl bg-background absolute bottom-0 left-1/2 -translate-x-1/2 w-68 h-68 flex items-center justify-center z-20"
	>
		<Learnmore />
	</div>
</section>
