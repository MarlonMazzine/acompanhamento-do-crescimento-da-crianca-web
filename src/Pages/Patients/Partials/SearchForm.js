import { useCallback, useState } from "react";
import ModalNewPatient from "../../../Components/ModalNewPatient";
import filterPatients from "../../../Helpers/PatientsFilter";
import * as S from "../../../styled";

export default function SearchForm({patients, onFiltered}) {
	const [susValue, setSusValue] = useState("");
	const [nameValue, setNameValue] = useState("");
	const [birthdateValue, setBirthdateValue] = useState("");

	const today = new Date();
	const dateNow = today.toISOString().slice(0, 10);
	const dateNineteenYearsLater = new Date().setDate(today.getDate() - 6935);
	const minDate = new Date(dateNineteenYearsLater).toISOString().slice(0, 10);

	const handleOnFiltered = useCallback((patientsFiltered) => {
		onFiltered(patientsFiltered);
	}, [onFiltered]);

	return (
		<>
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="mb-4">Lista de pacientes</h2>
					<form>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-sus-number">Nº do SUS:</label>
								<div className="input-group">
									<input
										type="number"
										maxLength="15"
										className="form-control"
										id="input-sus-number"
										aria-describedby="basic-addon3"
										placeholder="Número da carteirinha do SUS do paciente"
										value={susValue}
										onChange={(e) => setSusValue(e.target.value)}
										min={111111111111111}
										max={999999999999999}
									/>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-patient-name">Nome:</label>
								<div className="input-group">
									<input
										type="text"
										className="form-control"
										id="input-patient-name"
										maxLength="255"
										aria-describedby="basic-addon3"
										placeholder="Informe aqui o nome do paciente"
										value={nameValue}
										onChange={(e) => setNameValue(e.target.value)}
										min={minDate}
										max={dateNow}
									/>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-bithdate">Data de nascimento:</label>
								<div className="input-group">
									<input
										type="date"
										className="form-control"
										id="input-bithdate"
										aria-describedby="basic-addon3"
										value={birthdateValue}
										onChange={(e) => setBirthdateValue(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="form-group row mt-4 justify-content-between">
							<div className="col-sm-10">
								<S.InputSubmit
									className="btn text-default-color mr-3"
									type="button"
									onClick={() => {
										const patientsFiltered = filterPatients(susValue, nameValue, birthdateValue);
										handleOnFiltered(patientsFiltered);
									}}
								>
									Filtrar
								</S.InputSubmit>
								<S.ButtonReset
									className="btn text-default-color mr-3"
									type="reset"
									onClick={() => {
										setBirthdateValue("");
										setNameValue("");
										setSusValue("");
									}}
								>
									Limpar
								</S.ButtonReset>
								<S.ButtonNewRegister
									className="btn bg-default-color text-default-color mr-3"
									type="button"
									data-target="#modal-new-patient"
									data-toggle="modal"
								>
									+ Adicionar
								</S.ButtonNewRegister>
							</div>
						</div>
					</form>
				</div>
			</div>

			<ModalNewPatient />
		</>
	);
}
