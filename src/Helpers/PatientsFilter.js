import { getStoragePatients } from "./SessionStorage";
import { validateBr } from "js-brasil";

export default function filterPatients(susValue, nameValue, birthdateValue) {
	const patients = getStoragePatients();

	if (birthdateValue !== "" && !validateBr.data(new Date(birthdateValue).toLocaleDateString("pt-BR"))) {
		alert("Data inválida!");
	} else if (susValue !== "" && !validateBr.cns(susValue)) {
		alert("Número do SUS é inválido!");
	} else {
		switch (true) {
			case susValue && (susValue.length >= 0 || susValue.length <= 15):
				return patients.filter((p) => p.document.includes(susValue));
			case nameValue && nameValue.length > 0:
				return patients.filter((p) => p.userName.toLowerCase().includes(nameValue.toLowerCase()));
			case birthdateValue && birthdateValue.length > 0:
				return patients.filter((p) => p.birthdate.includes(birthdateValue));
			default:
				return patients;
		}
	}
}
