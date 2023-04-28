<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="py-10 px-10 sm:px-12 md:px-16 lg:px-24 xl:px-32">
    <article class="prose mx-auto">
        <h1>What is HoloSays?</h1>
        <p><b>HoloSays</b> is an ambitious project to generate transcripts, subtitles, summaries and metadata for nearly every Hololive or vtuber stream VOD.</p>
        <h2>Why build HoloSays?</h2>
        <p>There are now thousands of active vtubers that stream daily on platforms such as YouTube and Twitch. They generate a massive amount of content daily. Even if you are a fan of a single agency such as Hololive Production, it is increasingly difficult to keep up with what happens in the vtuber sphere.</p>
        <p>This is the primary reason why HoloSays is being developed - to make it easier for fans to stay informed, and find things easier.</p>
        <p>While the foundational technologies to make them possible have existed for months, there is still a large usability barrier for fans.</p>
        <h2>What are the other benefits?</h2>
        <p>HoloSays also aims to make vtubers <b>accessible</b> to more audiences - people who do not speak the source language, or viewers with hearing disabilities. For them, it will become an indispensable tool, that the platforms sadly don't provide natively at an acceptable level.</p>
        <p>In the future, HoloSays will also make it easier for both indie and established vtubers to generate subtitled content, timestamps and more.</p>
        <h2>How does it work?</h2>
        <p>HoloSays uses multiple technologies, such as <a href="https://svelte.dev" class="link link-primary">Svelte</a> for a fast and lightweight web app, and <a href="https://elixir-lang.org" class="link link-primary">Elixir</a> for core services. The most important ones are state of the art machine learning (ML) models such as Whisper and GPT from OpenAI.</p>
        <p><a href="https://openai.com/research/whisper" class="link link-primary">Whisper</a> is a state of the art ML model for near-human accuracy audio transcription and translation. It makes HoloSays possible at an acceptable level of accuracy and cost. To increase the level of accuracy of final transcriptions and other artefacts, we are planning to make an open source filter to prevent common errors in the livestreaming domain.</p>
        <p><a href="https://openai.com/product/gpt-4" class="link link-primary">GPT-4</a> is one of the top Large Language Models (LLMs) available today, that allows us to perform novel tasks that previously required human input. This includes:
            <ul class="list-disc">
                <li>Content summaries</li>
                <li>Chapter generation</li>
                <li>Embeddings</li>
                <li>Semantic search across videos</li>
            </ul>
        As you can see, LLMs bring a lot of new and previously impossible features at an affordable cost.
        <h2>What is on the roadmap?</h2>
        <p>HoloSays will slowly introduce more automation and features over time in response to user's interest.</p>
        <p>We will also explore translation of non-English streams, using tuned models developed by the community, however English will be the focus for the time being.</p>
        <h2>Questions?</h2>
        <p>Feel free to reach out on <a href="http://discordapp.com/users/511267995214151721" class="link link-primary">Discord</a></p>
    </article>
</div>
