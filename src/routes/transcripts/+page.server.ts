import type { PageServerLoad } from './$types';
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

import { HOLOSAYS_AWS_ACCESS_KEY_ID, HOLOSAYS_AWS_SECRET_ACCESS_KEY } from "$env/static/private";
const credentials = { accessKeyId: HOLOSAYS_AWS_ACCESS_KEY_ID, secretAccessKey: HOLOSAYS_AWS_SECRET_ACCESS_KEY };

const s3 = new S3Client({
	endpoint: "https://ams3.digitaloceanspaces.com",
	region: "eu-central-1",
	credentials,
});

const bucketName = "holosays";
const command = new ListObjectsCommand({ Bucket: bucketName, Prefix: "transcripts" });

export const load = (async () => {
	try {
		// FIXME: This is all pretty temporary, and will be replace with a fetch to the core database
		const data = await s3.send(command);

		const transcripts = (data.Contents ?? [])
			.filter(entry => entry.Key !== 'transcripts/')
			.map(entry => {
				const keyParts = (entry.Key ?? '').split('/');
				const fileNameParts = keyParts.pop()?.split('-');
				const sourceId = (fileNameParts ?? '').at(0);

				return {
					...entry,
					sourceId
				};
			}) as ArrayLike<{ Key: string, sourceId: string }>;

		return { transcripts };
	} catch (error) {
		console.error(error);
		throw error;
	}
}) as PageServerLoad;
