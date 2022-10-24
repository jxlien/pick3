<script>
	import CardHeading from './CardHeading.svelte';
	export let cards;
	export let restart;
	import { fly  } from 'svelte/transition';
	const highlightStyles = 'bg-black underline p-2 mx-2 rotate-12 scale-110 transform inline-block';
</script>

<div transition:fly="{{ y: -200, duration: 1000 }}"  class="absolute inset-0 w-full-h-full">
	<div
		class="w-full pt-24 pb-16 xl:pb-24 xl:pt-36 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-lg bg-gradient-to-b from-black to-transparent"
	>
		<h1 class="text-5xl text-center px-6">
			Pick a place you <span class={highlightStyles}>DO NOT</span> want to go to
		</h1>

		<button on:click={restart} class="mt-8 xl:mt-12">restart</button>
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
</div>
