import { Component } from "react";
import Fetch from "./Fetch";

async function getResponse(url, body, header) {
	const configurations = {
		method: "POST",
		headers: header,
		body: body,
	};

	return await new Fetch().getFetchResponse(url, configurations);
}

export default class FetchPost extends Component {
	async getTextResponse(url, body, header) {
		const response = await getResponse(url, body, header)
		return response.text()
	}

	async getJsonResponse(url, body, header) {
		const response = await getResponse(url, body, header)
		return response.json()
	}
}
