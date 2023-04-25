import type { PageLoad } from './$types';

export const load = (async (data) => {
	const { params: { slug } } = data;

	return { sourceID: slug };
}) satisfies PageLoad;