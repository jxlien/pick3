<script>
	import CardHeading from './CardHeading.svelte';
	export let cards
</script>

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

