<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import TranscriptCard from '$lib/components/TranscriptCard.svelte';

	const transcripts = data.transcripts || [];
</script>

<h1 class="text-4xl font-bold mb-5 text-center pt-4">Transcripts</h1>
<div class="overflow-x-auto lg:mx-48 mx-6 space-y-6 py-6 px-6">
	<div
		class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-4 text-primary"
	>
		{#each transcripts as transcript}
			<a href="/transcripts/{transcript.sourceID}" class="md:hover:scale-105 transition-all">
				<TranscriptCard {transcript} />
			</a>
		{/each}
	</div>
</div>
