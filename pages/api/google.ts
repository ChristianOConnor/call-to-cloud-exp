// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { GoogleAuth } from "google-auth-library"

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	const url = process.env.FUNCTION_URL as string

	//Example with the key file, not recommended on GCP environment.
	const auth = new GoogleAuth({ keyFilename: process.env.KEYSTORE_PATH })

	//Create your client with an Identity token.
	const client = await auth.getIdTokenClient(url)
	const result = await client.request({ url })
	console.log(result.data)
	res.json({ data: result.data })
}
