import { validateBr } from "js-brasil";
import FetchGet from "./FetchGet";
import FetchPost from "./FetchPost";
import Headers from "./Headers";
import { getStorageAuthenticationInformations } from "./SessionStorage";

export default async function AddPatient(sus, name, birthdate, email, gender) {
	const patientDatas = [sus, name, birthdate, email, gender];
	if (patientDatas.includes("") || patientDatas.includes(undefined)) {
		alert("Por favor, preencha todos os campos para adicionar um novo paciente.");
	} else if (sus !== "" && !validateBr.cns(sus)) {
		alert("Número do SUS é inválido!");
	} else {
		const URL = `${process.env.REACT_APP_WEBSERICE_V1}/patient`;
		const doctorId = getStorageAuthenticationInformations()["doctor"]["id"];
		const header = new Headers().getJsonContentTypeHeaderAuthorization();

		const body = JSON.stringify({
			userName: name,
			birthdate: birthdate,
			document: sus,
			email: email,
			doctorId: doctorId,
			gender: gender,
		});

		try {
			await new FetchPost().getTextResponse(URL, body, header);
			alert("Cadastro realizado com sucesso.");
			
			const URL_PATIENTS_BY_DOCTOR_ID = `${process.env.REACT_APP_WEBSERICE_V1}/patient/${doctorId}`;
			const patients = await new FetchGet().getTextResponse(URL_PATIENTS_BY_DOCTOR_ID, header);

			sessionStorage.removeItem("Patients");
			sessionStorage.setItem("Patients", patients);
			window.location.reload();
		} catch (e) {
			alert(e.message);
		}
	}
}
