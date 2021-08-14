import { useState } from "react";
import "../../style.css";
import Teste from './Test';

export default function Calculator() {
	const names = [
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Patience Neal",
		"Fernanda Horn",
		"Karson Byrd",
		"Lizeth Newman",
		"Jacqueline Davidson",
		"Jaidyn Arias",
		"Milton Espinoza",
		"Lane Ramirez",
		"Adonis Blackwell",
		"Raven Ellison",
		"Tyrese Whitney",
		"Kaleb Burnett",
		"Marlon Mazzine dos Santos Figueiredo",
	];

	const [searchTerm, setSearchTerm] = useState("");
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const results = !searchTerm
		? names
		: names.filter((person) => person.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

	return (
		<>
			<div className="card mb-4">
				<div className="card-body">
					<h2 className="mb-4">Calculadora</h2>
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
							/>
							<div className="dropdown-menu dropdown-menu-lg-right w-100 input-patient">
								<ul className="w-100">
									{results.map((item, index) => (
										<li
											className="dropdown-item btn"
											onClick={() => {
												document.getElementById("input-patient-name").value = item.toString();
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
							<label htmlFor="input-peso">Peso:</label>
							<div className="input-group">
								<input
									className="form-control"
									id="input-peso"
									aria-describedby="basic-addon3"
									placeholder="Ex. 12.0"
									type="number"
									step="0.1"
									min="1"
									max="100"
									maxLength="5"
								/>
							</div>
						</div>
						<div className="col">
							<label htmlFor="input-altura">Altura:</label>
							<div className="input-group">
								<input
									className="form-control"
									id="input-altura"
									aria-describedby="basic-addon3"
									placeholder="Ex. 1.2"
									type="number"
									step="0.1"
									min="1"
									max="100"
									maxLength="5"
								/>
							</div>
						</div>
					</div>
					<div className="form-group row mt-4 text-center">
						<div className="col-sm-10 mx-auto">
							<button
								type="submit"
								className="btn btn-primary bg-default-color text-default-color pt-2 pb-2 pl-5 pr-5"
							>
								Calcular
							</button>
							<button
								type="reset"
								className="btn btn-light ml-3 pt-2 pb-2 pl-5 pr-5"
								onClick={() => {
									document.getElementById("input-patient-name").value = "";
									document.getElementById("input-altura").value = "";
									document.getElementById("input-peso").value = "";
								}}
							>
								Limpar
							</button>
						</div>
					</div>
				</div>
			</div>

			<Teste/>
		</>
	);
}
