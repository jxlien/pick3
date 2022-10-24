<script>
	import ZipInput from './components/ZipInput.svelte';
	import Cards from './components/Cards.svelte';
	import JSConfetti from 'js-confetti';

	let cards = [];
	let loading = false;
	let progressState = 'input';
	let celebrateMessage = 'Flipping between the two...';

	async function loadChoices() {
		loading = true;
		cards = (
			await fetch('https://pick3.onrender.com').then((res) => res.json())
		).results;
		
		loading = false;
		progressState = 'cards';
	}
	function restart() {
		cards = [];
		progressState = 'input';
		celebrateMessage = 'Flipping between the two...';
	}
	function deleteCard(cardInd) {
		if (cards.length !== 3) return;
		cards.splice(cardInd, 1);
		cards = [...cards];
		progressState = 'flipping';

		setTimeout(() => {
			const cardToKill = Math.round(Math.random());
			cards.splice(cardToKill, 1);
			cards = [...cards];
			celebrateMessage = `WOOOOO, you're going to ${cards[0].name}!!`;

			const jsConfetti = new JSConfetti();
			jsConfetti.addConfetti();

		}, 2000);
	}
</script>

<main class="flex flex-col items-start min-h-screen relative overflow-hidden">
	{#if progressState === 'input'}
		<ZipInput {loadChoices} {loading} />
	{/if}
	{#if ['cards', 'flipping'].includes(progressState)}
		<Cards {cards} {restart} {deleteCard} {progressState} {celebrateMessage} />
	{/if}
	<footer class="mt-auto flex justify-center w-full py-6">
		<button
			on:click={() => window.alert('Just pick one')}
			class="transform active:translate-y-1 transition-transform">I'm confused</button
		>
	</footer>
</main>
