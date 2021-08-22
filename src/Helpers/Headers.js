import React from "react";
import { getStorageAuthenticationInformations } from "./SessionStorage";

export default class Headers extends React.Component {
	getJsonContentTypeHeader() {
		return {
			"Content-type": "application/json; charset=UTF-8",
		};
	}

	getJsonContentTypeHeaderAuthorization() {
		return {
			"Content-type": "application/json; charset=UTF-8",
			Authorization: getStorageAuthenticationInformations()["token"],
		};
	}

	getFormUrlEncodedContentTypeHeader() {
		return {
			"Content-Type": 'application/x-www-form-urlencoded; charset="iso-8859-1"',
		};
	}
}
