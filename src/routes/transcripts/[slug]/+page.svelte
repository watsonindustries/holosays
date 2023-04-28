<script lang="ts">
	import TranscriptCard from '$lib/components/TranscriptCard.svelte';
	import type { Transcript } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;

	let transcripts: Array<Transcript> = data.transcripts || [];
	let transcript = transcripts.find(
		(t) => t.sourceID == data.sourceID && t.remoteURL.endsWith('vtt')
	) || {
		sourceID: '',
		remoteURL: ''
	};
	let youtubeURL = `https://www.youtube.com/watch?v=${transcript?.sourceID}`;

	let video = document.createElement('video');
	document.body.appendChild(video);
	$: video.setAttribute('crossorigin', 'anonymous');

	const track = document.createElement('track');
	track.setAttribute('kind', 'subtitles');
	track.setAttribute('srclang', 'en');
	track.setAttribute('label', 'English');
	track.setAttribute('default', '');
	track.setAttribute('src', transcript.remoteURL);

	let cues: any;

	video.appendChild(track);
	let textTrack = track.track;

	function setCues() {
		cues = textTrack.cues;
	}

	function formatTs(seconds: number): string {
		return new Date(seconds * 1000).toISOString().slice(11, 19);
	}
</script>

<h1 class="text-4xl font-bold text-center py-4">Transcript</h1>

<div class="alert shadow-md w-11/12 mx-auto my-4">
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="stroke-current flex-shrink-0 w-6 h-6"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/></svg
		>
		<span
			>Accuracy issues and bugs are expected while in beta. Manually verify accuracy of data before
			use.</span
		>
	</div>
</div>

<div class="flex md:flex-row flex-col py-4 px-2 space-y-6 md:space-y-0">
	<div class="lg:w-1/3">
		<a
			href={youtubeURL}
			class="w-full transition-all hover:scale-105 tooltip hover:tooltip-open tooltip-bottom tooltip-secondary"
			data-tip="view full video on YouTube"
		>
			<TranscriptCard {transcript} />
		</a>
	</div>
	<div class="px-6 lg:w-2/3">
		<div class="space-x-3">
			<button on:click={setCues} class="btn btn-primary rounded-full hover:scale-105"
				>Load Transcript</button
			>
			<a class="btn btn-secondary rounded-full hover:scale-105" href={transcript.remoteURL}
				>Download subtitles</a
			>
		</div>

		<div class="py-6">
			{#if textTrack && cues}
				{#each cues as { startTime, text }}
					<p>
						<a href="{youtubeURL}&t={Math.ceil(startTime)}" class="link link-primary font-mono"
							>{formatTs(startTime)}</a
						>
						{text}
					</p>
				{/each}
			{/if}
		</div>
	</div>
</div>
