import { Component } from "react";
import Fetch from "./Fetch";

async function getResponse(url, headers) {
	const configuration = {
		method: "GET",
        headers: headers
	};

	return await new Fetch().getFetchResponse(url, configuration);
}

export default class FetchGet extends Component {
	async getTextResponse(url, headers) {
		const response = await getResponse(url, headers)
		return response.text()
	}

	async getJsonResponse(url, headers) {
		const response = await getResponse(url, headers)
		return response.json()
	}
}
