<script>
	import * as Sidebar from '$components/ui/sidebar/index.js';
	import { AppSidebar, Titlebar } from '$components/dash';
</script>

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<Titlebar />
		<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
			<section>
				<aside>accounts</aside>
				<header>graph</header>
				<article>transactions</article>
				<footer>
					<div class="card">expenses</div>
					<div class="card">asdfafsdf</div>
				</footer>
			</section>
			<div class="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>

<style>
	section {
		height: 100%;
		width: 100%;
		gap: 2rem;

		display: grid;
		grid-template-areas: 'aside header' 'aside article' 'aside footer';

		aside {
			grid-area: aside;
			min-width: 20rem;

			background: rebeccapurple;
		}

		header {
			grid-area: header;
			background: rebeccapurple;
		}

		article {
			grid-area: article;
			background: rebeccapurple;
		}

		footer {
			grid-area: footer;
			background: rebeccapurple;

			display: flex;
			gap: 1.5rem;
			padding: 1rem;

			.card {
				height: 100%;
				width: 100%;
				background-color: yellowgreen;
			}
		}
	}
</style>
