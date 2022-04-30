import React from "react"
import { Button } from "react-bootstrap"
import { GoogleAuth } from "google-auth-library"

class Middle extends React.Component {
	handleClick() {
		console.log("this is:", this)
	}

	// this is client code and "google-auth-library" is a pkg for node
	// check out /pages/api/google
	async fetchNonce() {
		// Define your URL, here with Cloud Run but the security is exactly the same with Cloud Functions (same underlying infrastructure)
		const url = process.env.FUNCTION_URL as string

		//Example with the key file, not recommended on GCP environment.
		const auth = new GoogleAuth({ keyFilename: process.env.KEYSTORE_PATH })

		//Create your client with an Identity token.
		const client = await auth.getIdTokenClient(url)
		const res = await client.request({ url })
		console.log(res.data)
	}

	// this talks with /pages/api/google
	async imCallingAnAPI() {
		const result = await fetch("/api/hello")
		console.log({ result })
	}

	render() {
		return (
			<div className="col-md-12 text-center">
				<Button variant="primary" onClick={this.imCallingAnAPI}>
					Click me
				</Button>
			</div>
		)
	}
}

export default Middle
