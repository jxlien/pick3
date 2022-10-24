<script>
	export let loadChoices;
	export let loading;
	import { fly  } from 'svelte/transition';
</script>

<div transition:fly="{{ y: -200, duration: 500 }}"  class="absolute inset-0 w-full-h-full">
	<div
		class="w-full pt-24 pb-16 xl:pb-24 xl:pt-36 flex flex-col items-center justify-center bg-opacity-40 backdrop-blur-lg bg-gradient-to-b from-black to-transparent"
	>
		<h1 class="text-7xl text-center px-6">Pick3</h1>
		<h3 class="text-3xl text-center mt-3">For the indecisive</h3>
	</div>
	<div class="w-full flex justify-center px-3">
		<div class="bg-opacity-25 bg-white p-6 flex flex-wrap items-center max-w-[500px] rounded-xl">
			<label for="zip-input" class="mr-4">Enter Location (ZIP, city, etc)</label>
			<input id="zip-input" name="zip-input" class="text-black p-1 rounded" type="text" />
			<div class="w-full flex mt-3 items-center">
				<button
					type="button"
					class="bg-gradient-to-tr from-transparent to-black hover:to-[#00000070] px-4 py-2 block rounded"
					on:click={loadChoices}>Show Choices</button
				>
				{#if loading}
					<p class="flex-1 text-center text-lg">Searching...</p>
				{/if}
			</div>
		</div>
	</div>
</div>
