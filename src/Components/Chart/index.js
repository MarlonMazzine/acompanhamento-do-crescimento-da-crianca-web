import React from "react";
import { Line } from "react-chartjs-2";
import { CHART_COLORS } from "../../styled";

export default function Teste(props) {
	const data = {
		labels: props.totalOfMonths,
		datasets: [
			{
				label: "Seu paciente",
				data: [
					{
						x: props.age,
						y: props.height,
					},
				],
				backgroundColor: CHART_COLORS.purple,
				borderColor: CHART_COLORS.purple,
				pointStyle: "circle",
				pointRadius: 10,
			},
			{
				label: "3%",
				data: props.defaultValue.threePercent,
				backgroundColor: CHART_COLORS.red,
				borderColor: CHART_COLORS.red,
			},
			{
				label: "15%",
				data: props.defaultValue.fifteenPercent,
				backgroundColor: CHART_COLORS.yellow,
				borderColor: CHART_COLORS.yellow,
			},
			{
				label: "50%",
				data: props.defaultValue.fiftyPercent,
				backgroundColor: CHART_COLORS.green,
				borderColor: CHART_COLORS.green,
			},
			{
				label: "85%",
				data: props.defaultValue.eightyFivePercent,
				backgroundColor: CHART_COLORS.yellow,
				borderColor: CHART_COLORS.yellow,
			},
			{
				label: "97%",
				data: props.defaultValue.ninetySevenPercent,
				backgroundColor: CHART_COLORS.red,
				borderColor: CHART_COLORS.red,
			},
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

	return (
		<>
			<div style={{ width: "90%", margin: "auto" }}>
				<Line data={data} options={options} />
			</div>
		</>
	);
}
