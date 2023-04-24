<script lang="ts">
	import type { Transcript } from "$lib/types";

	export let transcript: Transcript;

	const placeholderCardImg = "https://staticdelivery.nexusmods.com/mods/3759/images/thumbnails/1/1-1619321985-1847446306.png";
</script>

<div class="card card-compact bg-base-100 shadow-xl mx-5">
	<figure><img src={transcript.thumbnailURL || placeholderCardImg} alt="Shoes" /></figure>
	<div class="card-body">
		<h2 class="card-title">{transcript.sourceID}</h2>
		<div class="card-actions justify-end">
			<!-- <div class="badge badge-secondary">Transcript</div> -->
			<div class="badge badge-secondary">Subtitles</div>
		</div>
	</div>
</div>
