import { useState } from "react";
import getPatientMeasures from "../../Helpers/PatientMeasures";
// import { getMonthDifference } from ''
import { Line } from "react-chartjs-2";
import { CHART_COLORS } from "../../styled";
import * as S from "../../styled";

export default function ChartModal(props) {
	const defaultValue = props.jsonMeasures;
	// debugger
	// console.log(defaultValue);
	const datas = Array(defaultValue.map(d => d.height))

	const data = {
		labels: "2",
		datasets: [
			{
				label: props.patientName,
				data: datas,
				backgroundColor: CHART_COLORS.purple,
				borderColor: CHART_COLORS.purple,
			}
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Altura (cm)",
				position: "left",
				font: {
					size: 15,
				},
			},
			subtitle: {
				display: true,
				text: "Meses",
				position: "bottom",
				font: {
					size: 15,
				},
			},
		},
		pointStyle: "circle",
		pointRadius: 4,
	};

	const [userName, setUserName] = useState(props.userName);
	const [birthdate, setBirthdate] = useState(props.birthdate);
	const [gender, setGender] = useState(props.gender);
	const [measures, setMeasures] = useState(props.measures);
	const [jsonMeasures, setJsonMeasures] = useState(props.jsonMeasures);
	//userName, birthdate, gender, measures}) {
	// debugger;
	// const jsonMeasures = props.jsonMeasures.length > 0 ? JSON.parse(measures) : measures;

	// if (teste.length === 0) {
	// 	return null; //alert("Nenhum dado de peso e altura para exibir.");
	// }

	// console.log("teste: " + teste);
	return (
		<>
			<div
				className="modal fade show"
				id="chart-modal"
				tabIndex="-1"
				aria-labelledby="chart-modal"
				aria-hidden="true"
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
									(document.getElementById("chart-modal").style.display = "none")
								}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div style={{ width: "100%", margin: "auto" }}>
								<Line data={data} options={options} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
