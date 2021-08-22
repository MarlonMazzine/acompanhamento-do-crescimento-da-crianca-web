import { useState } from "react";
import ModalPatientInformations from "../../Components/ModalPatientInformations";
import { getStoragePatients } from "../../Helpers/SessionStorage";
import SearchForm from "./Partials/SearchForm";
import * as g from "../../Helpers/Gender";
import getPatientMeasures from "../../Helpers/PatientMeasures";

export default function Patients() {
	/**
	 * AIG = Adequeado para Idade Gestacional
	 * PIG = Pequeno para Idade Gestacional
	 * GIG = Grande para Idade Gestacional
	 */
	const [patients, setPatients] = useState(getStoragePatients());
	const [userName, setUserName] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [gender, setGender] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState(0);
	const [patientId, setPatientId] = useState("");
	const [measures, setMeasures] = useState([]);

	return (
		<>
			<SearchForm patients={patients} onFiltered={setPatients} />
			<div className="ml-2 mr-2">
				<div className="table-responsive">
					<table className="table table-hover table-striped table-bordered text-center">
						<thead className="bg-default-color">
							<tr>
								<th className="text-default-color">SUS</th>
								<th className="text-default-color">Nome</th>
								<th className="text-default-color">Nascimento</th>
							</tr>
						</thead>
						<tbody>
							{patients.map((patient, index) => {
								const birthdateBR = new Date(patient["birthdate"]).toLocaleDateString("pt-BR");
								const genderBR = patient["gender"] === g.male ? "Masculino" : "Feminino";

								return (
									<tr
										className="pointer"
										key={index}
										data-target="#modal-patient-informations"
										data-toggle="modal"
										onClick={async () => {
											setUserName(patient["userName"]);
											setPatientId(patient["id"]);
											setBirthdate(birthdateBR);
											setGender(genderBR);
											setMeasures(await getPatientMeasures(patient["id"]));
										}}
									>
										<td className="align-middle">{patient["document"]}</td>
										<td className="align-middle">{patient["userName"]}</td>
										<td className="align-middle">{birthdateBR}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			<ModalPatientInformations userName={userName} birthdate={birthdate} gender={gender} measures={measures} />
		</>
	);
}
