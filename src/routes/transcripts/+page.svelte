<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const bucketBaseURL = 'https://holosays.ams3.cdn.digitaloceanspaces.com/';

	const transcripts = data.transcripts || [];
</script>

<div>
	<h1 class="text-2xl font-bold mb-5 text-center">Transcripts</h1>

	<div class="overflow-x-auto lg:mx-72 mx-6">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Source ID</th>
					<th>Download</th>
				</tr>
			</thead>
			<tbody>
				{#each transcripts as { Key, sourceId }}
					<tr>
						<th>{sourceId}</th>
						<td>
							<a href="{bucketBaseURL}{Key}" class="link link-primary">{Key}</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
