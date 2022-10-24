<script>
	export let loadChoices;
	export let loading = false;
</script>

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
