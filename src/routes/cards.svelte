<script>
	import CardHeading from './components/CardHeading.svelte';

	const cards = [
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
		},
	];
</script>

<main class="flex flex-col items-start min-h-screen">
    <div class="w-full h-64 flex items-center justify-center bg-opacity-40 backdrop-blur-lg bg-gradient-to-b from-black to-transparent">
        <h1 class="text-5xl text-center px-6">Pick a place you <span class="bg-black underline p-2 mx-2 rotate-12 scale-110 transform inline-block">DO NOT</span> want to go to</h1>
    </div>
	<section class="pt-4 flex w-full flex-wrap justify-center">
		{#each cards as card}
			<button
				class=" min-w-[260px] max-w-[400px] m-4 flex-1 rounded shadow-[#86dbf55b] overflow-hidden shadow-md relative group transition-transform transform hover:translate-y-1"
			>
				<img
					class="h-auto w-full  aspect-[4/3]  object-cover transition-transform group-hover:scale-105 duration-500"
					target="_blank"
					alt=""
					src={card.image.url}
				/>
				<CardHeading {card} />
			</button>
		{/each}
	</section>
    <footer class="mt-auto flex justify-center w-full py-6">
        <button class="transform active:translate-y-1 transition-transform">I'm confused</button>
    </footer>
</main>
