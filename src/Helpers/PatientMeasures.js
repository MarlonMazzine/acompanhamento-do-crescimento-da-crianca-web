import FetchGet from "./FetchGet";
import Headers from "./Headers";

export default async function getPatientMeasures(patientId) {
	if (patientId !== "") {
		const header = new Headers().getJsonContentTypeHeaderAuthorization();
		const URL_MEASURES = `${process.env.REACT_APP_WEBSERICE_V1}/weightheight/${patientId}`;

		return await new FetchGet().getTextResponse(URL_MEASURES, header);
	}

	return [];

	// sessionStorage.removeItem("Patients");
	// sessionStorage.setItem("Patients", patients);
	// window.location.reload();
}
