import { useState } from "react";
import getPatientMeasures from "../../Helpers/PatientMeasures";

export default function ModalPatientInformations(props) {
	const teste = props.measures;
	debugger
	return (
		<>
			<div
				className="modal fade"
				id="modal-patient-informations"
				tabIndex="-1"
				aria-labelledby="modal-patient-informations-label"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-scrollable">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Dados do paciente</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
											type="email"
											className="form-control"
											id="input-gender"
											maxLength={255}
											value={props.gender}
											disabled
										/>
									</div>
								</div>
							</div>

							<table class="table">
								<thead>
									<tr>
										<th scope="col">Data de inclusão</th>
										<th scope="col">Peso (kg)</th>
										<th scope="col">Altura (cm)</th>
									</tr>
								</thead>
								<tbody>
								{/* JSON.parse(teste).map((p, i) => { console.log(p.weight) }) */}
									{props.measures.map((measure, i) => {
										return (
											<tr>
												<td>Mark</td>
												<td>Mark</td>
												<td>Otto</td>
											</tr>
										);
									})}
									{/* <tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr>
									<tr>
										<td>Mark</td>
										<td>Mark</td>
										<td>Otto</td>
									</tr> */}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
