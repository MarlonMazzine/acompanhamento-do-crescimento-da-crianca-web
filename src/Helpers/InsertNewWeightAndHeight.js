import FetchPost from "../Helpers/FetchPost";
import Headers from "./Headers";

export default async function InsertNewWeightAndHeight(patientId, weight, height) {
	const patientInformations = [patientId, weight, height];

	if (patientInformations.includes("")) {
		alert("Selecione um paciente e informe o peso e altura dele para poder salvar os dados.");
	} else {
		const URL = `${process.env.REACT_APP_WEBSERICE_V1}/weightheight`;
		const body = JSON.stringify({
			patientId: patientId,
			weight: weight,
			height: height,
		});
		
		const headers = new Headers().getJsonContentTypeHeaderAuthorization();
		
		await new FetchPost().getTextResponse(URL, body, headers);
		alert("Dados salvos com sucesso!");
		window.location.reload();
	}
}
