import { useState } from "react";
import { validateBr } from "js-brasil";
import AddPatient from "../../Helpers/PatientRegister";
import * as S from "../../styled";
import * as g from "../../Helpers/Gender";

export default function ModalNewPatient() {
	const [sus, setSus] = useState("");
	const [name, setName] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [email, setEmail] = useState("");
	const [gender, setGender] = useState(g.female);
	// const [isSusValid, setSusValid] = useState(true);
	// const [isNameValid, setNameValid] = useState(true);
	// const [isNBirthdateValid, setBirthdateValid] = useState(true);
	// const [isEmailValid, setEmailValid] = useState(true);
	// const [isGenderValid, setGenderValid] = useState(true);

	return (
		<>
			<div
				className="modal fade"
				id="modal-new-patient"
				tabIndex="-1"
				aria-labelledby="modal-new-patient-label"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Novo cadastro</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="form-group row">
								<div className="col">
									<label htmlFor="input-sus-new-patient">Nº do SUS:</label>
									<div className="input-group">
										<input
											type="number"
											maxLength="15"
											className="form-control"
											id="input-sus-new-patient"
											aria-describedby="basic-addon3"
											placeholder="Número da carteirinha do SUS do paciente"
											value={sus}
											
											onChange={(e) => setSus(e.target.value)}
											// onChange={(e) => {
											//     setSus(e.target.value);
											// 	const spanValidator = document.getElementById("sus-message-validator");
											// 	const inputSus = e.target.className;

											// 	if (validateBr.cns(sus)) {
											// 		spanValidator.className += " d-none";
											//         inputSus.className += " text-success border-success";
											// 	} else {
											//         spanValidator.className += " d-block";
											//         inputSus.className += " text-danger border-danger";
											// 	}
											// }}
											
										/>
									</div>
									{/* <span id="sus-message-validator" className="invalid-feedback">
										Documento inválido
									</span> */}
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<label htmlFor="input-name-new-patient">Nome:</label>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											id="input-name-new-patient"
											maxLength="255"
											aria-describedby="basic-addon3"
											placeholder="Informe aqui o nome do paciente"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<label htmlFor="input-bithdate-new-patient">Data de nascimento:</label>
									<div className="input-group">
										<input
											type="date"
											className="form-control"
											id="input-bithdate-new-patient"
											aria-describedby="basic-addon3"
											placeholder="E.: dd/mm/aaaa"
											value={birthdate}
											onChange={(e) => setBirthdate(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<label htmlFor="input-email-new-patient">Email:</label>
									<div className="input-group">
										<input
											type="email"
											className="form-control"
											id="input-email-new-patient"
											aria-describedby="basic-addon3"
											placeholder="Ex.: exemplo@dominio.com"
											maxLength={255}
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
							</div>
							<fieldset className="form-group row">
								<legend className="col-form-label col-sm-2 float-sm-left pt-0">Gênero:</legend>
								<div className="col-sm-10">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="genderRadios"
											id="female-gender"
											value={gender}
											onChange={() => setGender(g.female)}
										/>
										<label className="form-check-label" htmlFor="female-gender">
											Feminino
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="genderRadios"
											id="male-gender"
											value={gender}
											onChange={() => setGender(g.male)}
										/>
										<label className="form-check-label" htmlFor="male-gender">
											Masculino
										</label>
									</div>
								</div>
							</fieldset>
						</div>
						<div className="modal-footer">
							<S.ButtonReset type="button" className="btn btn-secondary mr-3" data-dismiss="modal">
								Cancelar
							</S.ButtonReset>
							<S.ButtonNewRegister
								type="button"
								className="btn bg-default-color btn-primary"
								onClick={async () => {
									await AddPatient(sus, name, birthdate, email, gender);
								}}
							>
								Salvar
							</S.ButtonNewRegister>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
