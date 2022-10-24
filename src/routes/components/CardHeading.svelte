<script>
	export let card;
</script>

<div>
	<div class="absolute bottom-0 right-0 p-2 w-full 5 flex justify-end transition-[filter] blur-sm group-hover:blur-[2px] pr-6">
		<h5 class="text-3xl transition-transform group-hover:scale-125 origin-top-left pl-8">{card.name}</h5>
	</div>
	<div class="absolute bottom-0 right-0 pt-8  pb-4 w-full transition-[padding] group-hover:pr-8 group-hover:pb-6 bg-gradient-to-b from-transparent  to-[rgba(0,0,0,0.81)] bg-opacity-25 flex justify-end  pr-6">
		<h5 class="text-3xl">{card.name}</h5>
	</div>
</div>
