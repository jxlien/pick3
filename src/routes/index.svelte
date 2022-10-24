<script>
	import ZipInput from './components/ZipInput.svelte';
	import Cards from './components/Cards.svelte';
	import JSConfetti from 'js-confetti';

	let cards = [];
	let loading = false;
	let progressState = 'input';
	let input = 'Chicago, IL';
	let celebrateMessage = 'Flipping between the two...';
	let celebrateHeader;

	async function loadChoices(_input) {
		loading = true;
		cards = (await fetch(`https://pick3.onrender.com?near=${_input}`).then((res) => res.json()))
			.results;

		loading = false;
		progressState = 'cards';
	}
	function restart() {
		cards = [];
		progressState = 'input';
		celebrateMessage = 'Flipping between the two...';
		celebrateHeader = undefined;
	}
	function deleteCard(cardInd) {
		if (cards.length !== 3) return;
		cards.splice(cardInd, 1);
		cards = [...cards];
		progressState = 'flipping';
		celebrateHeader = `Drum Roll... 🥁 `;

		setTimeout(() => {
			const cardToKill = Math.round(Math.random());
			cards.splice(cardToKill, 1);
			cards = [...cards];
			celebrateMessage = `WOOOOO!! Enjoy this fine delicacy!`;
			celebrateHeader = `You're going to ${cards[0].name}!`;

			const jsConfetti = new JSConfetti();
			jsConfetti.addConfetti();
		}, 2000);
	}
</script>

<main class="flex flex-col items-start min-h-screen relative overflow-hidden">
	{#if progressState === 'input'}
		<ZipInput {input} {loadChoices} {loading} />
	{/if}
	{#if ['cards', 'flipping'].includes(progressState)}
		<Cards {cards} {restart} {deleteCard} {progressState} {celebrateMessage} {celebrateHeader} />
	{/if}
</main>
