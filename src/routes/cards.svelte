<script>
	import ZipInput from './components/ZipInput.svelte';
	import Cards from './components/Cards.svelte';

	let cards = [];
	let loading = false;
	let progressState = 'input';

	function loadChoices() {
		loading = true;
		setTimeout(() => {
			cards = [
				{
					name: 'Burger',
					image: {
						url: 'https://images.unsplash.com/photo-1606131731446-5568d87113aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
					}
				},
				{
					name: 'Ice cream',
					image: {
						url: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
					}
				},
				{
					name: 'Pizza',
					image: {
						url: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
					}
				}
			];
			loading = false;
			progressState = 'cards';
		}, 1000);
	}
	function restart() {
		cards = [];
		progressState = 'input';
	}
	const highlightStyles = 'bg-black underline p-2 mx-2 rotate-12 scale-110 transform inline-block';
</script>

<main class="flex flex-col items-start min-h-screen">
	<div
		class="w-full pt-24 pb-16 xl:pb-24 xl:pt-36 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-lg bg-gradient-to-b from-black to-transparent"
	>
		{#if progressState === 'input'}
			<h1 class="text-7xl text-center px-6">Pick3</h1>
			<h3 class="text-3xl text-center mt-3">For the indecisive</h3>
		{/if}
		{#if progressState === 'cards' && cards}
			<h1 class="text-5xl text-center px-6">
				Pick a place you <span class={highlightStyles}>DO NOT</span> want to go to
			</h1>
			<button on:click={restart} class="mt-8 xl:mt-12">restart</button>
		{/if}
	</div>

	{#if progressState === 'input'}
		<ZipInput {loadChoices} {loading} />
	{/if}
	{#if progressState === 'cards' && cards}
		<Cards {cards} />
	{/if}
	<footer class="mt-auto flex justify-center w-full py-6">
		<button class="transform active:translate-y-1 transition-transform">I'm confused</button>
	</footer>
</main>
