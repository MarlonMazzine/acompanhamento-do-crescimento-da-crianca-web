import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FetchGet from "../../Helpers/FetchGet";
import FetchPost from "../../Helpers/FetchPost";
import * as S from "../../styled";
import $ from "jquery";

$("#submitButton").on("click", () => {
	console.log("teste");
	// disable button
	// $(this).prop("disabled", false);
	// add spinner to button
	$(this).text('<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
});

export default function Login() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	sessionStorage.clear();

	const testando = async (e) => {
		sessionStorage.clear();
		e.preventDefault();
		// const login = JSON.stringify({
		// 	login: userName,
		// 	password: password
		// })
		const login = JSON.stringify({
			login: "marlonmazzine",
			password: "perereca1993",
		});
		// const URL = process.env.REACT_APP_CORS_TO_ANYWHERE + process.env.REACT_APP_WEBSERICE_V1 + '/login'
		const URL_LOGIN = process.env.REACT_APP_WEBSERICE_V1 + "/login";
		const header = {
			"Content-Type": "application/json",
		};

		try {
			sessionStorage.setItem(
				"AutheticationInformations",
				await new FetchPost().getTextResponse(URL_LOGIN, login, header)
			);

			const doctorId = JSON.parse(sessionStorage.getItem("AutheticationInformations"))["doctor"]["id"];
			const URL_DOCTORS = `${process.env.REACT_APP_WEBSERICE_V1}/patient/patients-by-doctor/${doctorId}`;
			const header2 = {
				Authorization: JSON.parse(sessionStorage.getItem("AutheticationInformations"))["token"],
			};

			sessionStorage.setItem("Patients", await new FetchGet().getTextResponse(URL_DOCTORS, header2));
			window.location.href += "inicio";
		} catch (error) {
			sessionStorage.clear();
			alert(error.message);
		}
	};

	return (
		<>
			<S.Container>
				<S.FormContent onSubmit={testando}>
					<h1 style={{ marginBottom: "40px" }}>Login</h1>
					<S.Input
						type="text"
						placeholder="Usuário"
						className="form-control"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						// required
					/>
					<S.Input
						type="password"
						placeholder="Senha"
						className="form-control"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						// required
					/>
					<S.InputSubmit type="submit" id="submitButton">
						Entrar
					</S.InputSubmit>
				</S.FormContent>
			</S.Container>
		</>
	);
}
