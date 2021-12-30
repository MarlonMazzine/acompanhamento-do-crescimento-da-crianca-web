import { useState } from "react";
import ChartModal from '../ChartModal'
import { getMonthDifference } from "../../Helpers/MonthDifference";
import * as S from "../../styled";

export default function ModalPatientInformations(props) {
	const [monthDifference, setMonthDifference] = useState(0);
	const [height, setHeight] = useState(0);
	const jsonMeasures = props.measures.length > 0 ? JSON.parse(props.measures) : props.measures;

	const data = [
		{
			x: monthDifference,
			y: height,
		},
	];

	return (
		<>
			<div
				className="modal"
				id="modal-patient-informations"
				tabIndex="-1"
				style={{ display: "none" }}
				// aria-labelledby="modal-patient-informations-label"
				// aria-hidden="true"
			>
				<S.ModalBackgound />
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Dados do paciente</h5>
							<button
								type="button"
								className="close"
								onClick={() =>
									// setMonthDifference(
									// 	getMonthDifference(props.birthdate)
									// )

									(document.getElementById("modal-patient-informations").style.display = "none")
								}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="form-group row">
								<div className="col">
									<label>Nome:</label>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											id="input-name-patient-informations"
											maxLength="255"
											value={props.userName}
											disabled
										/>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<label>Data de nascimento:</label>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											id="input-bithdate-patient-informations"
											value={props.birthdate}
											maxLength={10}
											disabled
										/>
									</div>
								</div>
							</div>
							<div className="form-group row">
								<div className="col">
									<label>Gênero:</label>
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											id="input-gender"
											maxLength={255}
											value={props.gender}
											disabled
										/>
									</div>
								</div>
							</div>

							<table className="table">
								<thead>
									<tr>
										<th scope="col">Data de inclusão</th>
										<th scope="col">Altura (cm)</th>
									</tr>
								</thead>
								<tbody>
									{/* JSON.parse(teste).map((p, i) => { console.log(p.weight) }) */}
									{jsonMeasures.map((measure, i) => {
										//pega o measure, concatenar numa string para obter os meses baseados na data de inclusão
										// meses = diaHoje - diaInclusao
										// mesesCrianca = diaHoje - nascimentos
										// mesNaEpoca = mesesCianca - meses
										return (
											<tr key={i}>
												{/* <td>{measure}</td> */}
												<td>{new Date(measure.creationDate).toLocaleDateString("pt-BR")}</td>
												<td>{measure.height}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						{/* <div className="modal-footer">
							<S.ButtonNewRegister
								type="button"
								className="btn bg-default-color btn-primary"
								onClick={() => {
									(document.getElementById("chart-modal").style.display = "block")
								}}
							>
								Gerar gráfico
							</S.ButtonNewRegister>
						</div> */}
					</div>
				</div>
			</div>
			<ChartModal jsonMeasures={jsonMeasures} />
		</>
	);
}
