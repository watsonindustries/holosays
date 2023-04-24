<script lang="ts">
	import type { PageData } from './$types';
	import TranscriptCard from '$lib/components/TranscriptCard.svelte';

	export let data: PageData;

	const transcripts = data.transcripts || [];
</script>

<div class="bg-base-200">
	<h1 class="text-4xl font-bold mb-5 text-center pt-4">Transcripts</h1>

	<div class="overflow-x-auto lg:mx-48 mx-6 space-y-6 py-6 px-6">
		<div
			class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 text-primary"
		>
			{#each transcripts as transcript}
				<TranscriptCard {transcript} />
			{/each}
		</div>
	</div>
</div>
