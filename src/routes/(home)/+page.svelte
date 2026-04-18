<script>
	import { Learnmore, Yellowcard, Whitecard } from '$components/home';
	import Button from '$components/ui/button/button.svelte';
	import { Accordion } from 'bits-ui';
	import favicon from '$lib/assets/favicon.svg';

	import { Navmenu, Logo, ModeToggle } from '$components/header';
	import { Show, SignInButton, UserButton } from 'svelte-clerk';

	import faqs from '$lib/assets/faqs.json';
</script>

<!--html-->

<header class="sticky top-0 z-50 flex items-center justify-between text-card-foreground px-2 py-2">
	<!--left-->
	<div id="logo" class="flex items-center gap-2 backdrop-blur-sm rounded-4xl px-2 h-full">
		<Logo src={favicon} />
	</div>
	<!--center-->
	<nav class="absolute left-1/2 -translate-x-1/2 backdrop-blur-sm rounded-4xl px-2 h-full">
		<Navmenu />
	</nav>

	<!--right-->
	<div id="link" class="flex items-center gap-2 h-full">
		<Show when="signed-out">
			<SignInButton
				class="hover:bg-primary/80 bg-foreground text-background text-sm font-medium hover:text-foreground h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
			/>
		</Show>
		<Show when="signed-in">
			<UserButton />
		</Show>
		<ModeToggle />
	</div>
</header>

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

<section class="grid grid-cols-1 py-16 px-80 pt-2 relative justify-between gap-16">
	<!-- Add 'text-center' to the main container or individual tags -->
	<main class="flex flex-col items-center text-center p-20 gap-8">
		<div class="flex flex-col items-center gap-4">
			<Button variant="outline" href="https://www.google.com/" class="border-accent-foreground"
				>Our Mission</Button
			>

			<h2 class="font-sans text-5xl font-bold leading-tight">
				We provide a secure, intuitive, and efficient platform
			</h2>
		</div>

		<p>
			We believe in a decentralized future where everyone has full control over their financial
			assets
		</p>
	</main>
</section>

<section class="grid grid-cols-2 p-16 pt-2 relative justify-between gap-16">
	<article class="rounded-16xl bg-muted-background relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>

	<aside class="pl-40 relative overflow-hidden flex flex-col justify-center h-full gap-12">
		<div class="flex flex-col gap-2">
			<Button
				variant="outline"
				href="https://www.google.com/"
				class="border-accent-foreground max-w-32">Security</Button
			>

			<h2 class="font-sans text-5xl font-bold leading-tight">Secure & Private</h2>
		</div>

		<p>Industry-leading encryption and non custodial storage ensure...</p>
	</aside>
</section>

<section class="grid grid-cols-2 p-16 pt-2 relative justify-between gap-16">
	<aside class="pl-40 relative overflow-hidden flex flex-col justify-center h-full gap-12">
		<div class="flex flex-col gap-2">
			<Button
				variant="outline"
				href="https://www.google.com/"
				class="border-accent-foreground max-w-32">Security</Button
			>

			<h2 class="font-sans text-5xl font-bold leading-tight">Secure & Private</h2>
		</div>

		<p>Industry-leading encryption and non custodial storage ensure...</p>
	</aside>

	<article class="rounded-16xl bg-accent relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>
</section>

<section class="grid grid-cols-1 py-16 px-80 pt-2 relative justify-between gap-16">
	<!-- Add 'text-center' to the main container or individual tags -->
	<main class="flex flex-col items-center text-center p-20 gap-8">
		<div class="flex flex-col items-center gap-4">
			<Button variant="outline" href="https://www.google.com/" class="border-accent-foreground"
				>Our Mission</Button
			>

			<h2 class="font-sans text-5xl font-bold leading-tight">
				We provide a secure, intuitive, and efficient platform
			</h2>
		</div>

		<p>
			We believe in a decentralized future where everyone has full control over their financial
			assets
		</p>
	</main>
</section>

<section class="grid grid-cols-4 h-120 p-16 pt-2 relative justify-between gap-16">
	<article class="rounded-16xl bg-accent relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>
	<article class="rounded-16xl bg-accent relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>
	<article class="rounded-16xl bg-accent relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>
	<article class="rounded-16xl bg-accent relative overflow-hidden">
		<img src="/iphone.webp" alt="App screenshot" class="relative translate-y-36 object-contain" />
	</article>
</section>

<section class="grid grid-cols-1 py-16 px-80 pt-2 relative justify-between gap-16">
	<!-- Add 'text-center' to the main container or individual tags -->
	<main class="flex flex-col items-center text-center p-20 gap-8">
		<div class="flex flex-col items-center gap-4">
			<Button variant="outline" href="https://www.google.com/" class="border-accent-foreground"
				>Our Mission</Button
			>

			<h2 class="font-sans text-5xl font-bold leading-tight">
				We provide a secure, intuitive, and efficient platform
			</h2>
		</div>

		<p>
			We believe in a decentralized future where everyone has full control over their financial
			assets
		</p>
	</main>
</section>

<section class="py-16 px-0 pt-2">
	<Accordion.Root type="single" class="w-full font-mono">
		{#each faqs as faq, i (faq)}
			<Accordion.Item
				value={faq.id}
				class="border-b border-border first:border-t data-[state=open]:bg-card px-8"
			>
				<Accordion.Header class="flex">
					<Accordion.Trigger class="group flex w-full items-center gap-4 h-16 text-left">
						<span
							class="flex h-7 w-7 shrink-0 items-center justify-center pt-0.5 text-xs text-muted-foreground rounded-sm bg-background group-data-[state=open]:bg-foreground group-data-[state=open]:text-background"
						>
							{String(i + 1).padStart(2, '0')}
						</span>
						<span class="flex flex-1 shrink-0 px-52 text-sm font-medium">
							{faq.question}
						</span>
						<div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent">
							<span
								class="text-base leading-none text-foreground transition-transform group-data-[state=open]:hidden"
								>+</span
							>
							<span
								class="hidden text-base leading-none text-foreground group-data-[state=open]:block"
								>−</span
							>
						</div>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="py-4 pb-16 px-63 text-sm leading-relaxed text-muted-foreground">
					{faq.answer}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>
