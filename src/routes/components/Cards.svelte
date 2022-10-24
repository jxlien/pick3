<script>
	import CardHeading from './CardHeading.svelte';
	export let cards;
	export let restart;
	export let deleteCard;
	export let progressState;
	export let celebrateMessage;
	import { fly } from 'svelte/transition';

	const highlightStyles = 'bg-black underline p-2 mx-2 rotate-12 scale-110 transform inline-block';
</script>

<div transition:fly={{ y: -200, duration: 1000 }} class="absolute inset-0 w-full-h-full">
	<div
		class="w-full pt-24 pb-16 xl:pb-24 xl:pt-36 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-lg bg-gradient-to-b from-black to-transparent"
	>
		<h1 class="text-5xl text-center px-6">
			Pick a place you <span class={highlightStyles}>DO NOT</span> want to go to
		</h1>

		<button on:click={restart} class="mt-8 xl:mt-12">restart</button>
	</div>
	<section
		class="pt-4 flex w-full flex-wrap justify-center {cards.length !== 3
			? 'pointer-events-none'
			: ''}"
	>
		{#each cards as card, cardInd}
			<button
				on:click={() => deleteCard(cardInd)}
				class=" min-w-[260px] max-w-[400px] m-4 flex-1 bg-black bg-opacity-75 rounded shadow-[#86dbf55b] overflow-hidden shadow-lg relative group transition-transform transform hover:translate-y-1"
			>
				<img
					class="h-auto w-full  aspect-[4/3] object-cover transition-all group-hover:scale-105 group-hover:opacity-25 duration-500"
					target="_blank"
					alt=""
					src={card.image}
				/>
				<svg
					class="absolute inset-0 m-auto group-hover:opacity-100 opacity-0 transition-opacity duration-500"
					width="84"
					height="84"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
						fill="#fff"
					/>
				</svg>

				<CardHeading {card} />
			</button>
		{/each}
		{#if progressState === 'flipping'}
			<div class="w-full flex justify-center">
				<h2 class=" text-4xl mt-4 bg-black p-6">{celebrateMessage}</h2>
			</div>
		{/if}
	</section>
</div>
