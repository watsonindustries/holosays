import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import type { Transcript } from '$lib/types';

function ytThumbnailURL(videoID?: string) {
	if (videoID) return `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`
	return undefined;
}

import { HOLOSAYS_AWS_ACCESS_KEY_ID, HOLOSAYS_AWS_SECRET_ACCESS_KEY } from "$env/static/private";
import type { LayoutServerLoad } from './$types';
const credentials = { accessKeyId: HOLOSAYS_AWS_ACCESS_KEY_ID, secretAccessKey: HOLOSAYS_AWS_SECRET_ACCESS_KEY };

const s3 = new S3Client({
	endpoint: "https://ams3.digitaloceanspaces.com",
	region: "eu-central-1",
	credentials,
});

const bucketName = "holosays";
const bucketBaseURL = `https://${bucketName}.ams3.cdn.digitaloceanspaces.com/`;
const command = new ListObjectsCommand({ Bucket: bucketName, Prefix: "transcripts" });

export const load = (async () => {
	try {
		// FIXME: This is all pretty temporary, and will be replace with a fetch to the core database
		const data = await s3.send(command);

		const transcripts = (data.Contents ?? [])
			.filter(entry => entry.Key !== 'transcripts/' && entry.Key?.endsWith('vtt'))
			.map(entry => {
				const keyParts = (entry.Key ?? '').split('/');
				const fileNameParts = keyParts.pop()?.split('-');
				const sourceID = (fileNameParts ?? '').at(0);
				const remoteURL = `${bucketBaseURL}${entry.Key}`;
				const thumbnailURL = ytThumbnailURL(sourceID);

				return { sourceID, remoteURL, thumbnailURL };
			}) as ArrayLike<Transcript>;

		console.log(transcripts);

		return { transcripts };
	} catch (error) {
		console.error(error);
		throw error;
	}
}) as LayoutServerLoad;
