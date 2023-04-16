<script lang="ts">
	import type { LayoutData } from './$types';

	import '../app.css';

	export let data: LayoutData;
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a href="/">Homepage</a></li>
				<li><a href="/transcripts">Transcripts</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost normal-case text-xl" href="/">holosays</a>
	</div>
	<div class="navbar-end">
		<!-- <button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button> -->
	</div>
</div>

<slot />

<footer class="footer footer-center p-4 bg-base-200 text-base-content">
	<div>
		<p>
			Copyright © 2023 - Powered by
			<a href="https://watsonindustries.live" class="link">Watson Industries</a> - Not affiliated with
			Cover Corp
		</p>
	</div>
</footer>
