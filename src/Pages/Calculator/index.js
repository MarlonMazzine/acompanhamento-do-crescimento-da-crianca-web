import { useState } from "react";
import "../../style.css";
import Chart from "../../Components/Chart/";
import { DefaultMonthsValues } from "../../Helpers/DefaultMonthsValues";
import * as DefaultBoysValues0To24 from "../../Helpers/Boys/DefaultValuesBoy0To24Months";
import { getMonthDifference } from "../../Helpers/MonthDifference";
import Modal from "../../Components/Modal";

export default function Calculator() {
	const [searchTerm, setSearchTerm] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [gender, setGender] = useState("");
	const [birthdate, setPatientBirthdate] = useState("");
	const [patientId, setPatientId] = useState("");

	const patients = JSON.parse(sessionStorage.getItem("Patients"));
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const patientsNames = [];
	patients.forEach((p) => patientsNames.push(p["userName"]));

	const results = !searchTerm
		? patientsNames
		: patientsNames.filter((person) => person.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

	const monthDifference = getMonthDifference(birthdate);
	const defaultValue = birthdate === "" ? DefaultBoysValues0To24 : DefaultMonthsValues(monthDifference, gender);
	const start = defaultValue.MonthStart;
	const end = defaultValue.MonthEnd;

	const totalOfMonths = Array(end - start + 1)
		.fill()
		.map((_, idx) => start + idx);

	return (
		<>
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="mb-4">Calculadora</h2>
					<form onSubmit="return false;">
						<label htmlFor="input-patient-name">Nome do paciente:</label>
						<div className="form-group">
							<div className="btn-group w-100">
								<input
									type="text"
									className="form-control"
									id="input-patient-name"
									aria-describedby="emailHelp"
									placeholder="Pesquise aqui o nome do paciente"
									value={searchTerm}
									onChange={handleChange}
									data-toggle="dropdown"
									data-display="static"
									aria-haspopup="true"
									aria-expanded="false"
									autoComplete="off"
									required
								/>
								<div className="dropdown-menu dropdown-menu-lg-right w-100 input-patient">
									<ul className="w-100">
										{results.map((item, index) => (
											<li
												className="dropdown-item btn"
												onClick={() => {
													document.getElementById("input-patient-name").value =
														item.toString();
													setGender(patients[index]["gender"]);
													setPatientBirthdate(patients[index]["birthdate"]);
												}}
												key={index}
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="form-group row">
							<div className="col">
								<label htmlFor="input-weight">Peso:</label>
								<div className="input-group">
									<input
										className="form-control"
										id="input-weight"
										aria-describedby="basic-addon3"
										placeholder="Ex. 12.0"
										type="number"
										step="0.1"
										min="1"
										max="200"
										maxLength="5"
										value={weight}
										onChange={(e) => setWeight(e.target.value)}
									/>
								</div>
							</div>
							<div className="col">
								<label htmlFor="input-height">Altura:</label>
								<div className="input-group">
									<input
										className="form-control"
										id="input-height"
										aria-describedby="basic-addon3"
										placeholder="Ex. 1.2"
										type="number"
										step="0.1"
										min="1"
										max="300"
										maxLength="5"
										value={height}
										onChange={(e) => setHeight(e.target.value)}
									/>
								</div>
							</div>
						</div>
						<div className="form-group row mt-4 text-center">
							<div className="col-sm-10 mx-auto">
								<button
									type="submit"
									className="btn bg-default-color text-default-color pt-2 pb-2 pl-5 pr-5"
									onClick={() => {
										setHeight(document.getElementById("input-height").value);
										setWeight(document.getElementById("input-weight").value);
									}}
								>
									Calcular
								</button>
								<button
									type="reset"
									className="btn btn-light ml-3 pt-2 pb-2 pl-5 pr-5"
									onClick={() => {
										document.getElementById("input-patient-name").value = "";
										document.getElementById("input-height").value = "";
										document.getElementById("input-weight").value = "";
										setHeight("");
										setWeight("");
									}}
								>
									Limpar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<h3 className="text-center mb-4">Altura por idade</h3>

			<Chart age={monthDifference} height={height} defaultValue={defaultValue} totalOfMonths={totalOfMonths} />
			<div className="form-group row mt-4 text-center">
				<div className="col-sm-11 mx-auto">
					<button
						className="btn btn-primary bg-default-color text-default-color mr-3"
						data-target="#exampleModal"
						data-toggle="modal"
					>
						Salvar dados
					</button>
					<button className="btn btn-primary bg-default-color text-default-color">Imprimir</button>
				</div>
			</div>

			<Modal />
		</>
	);
}
