import React from "react";
import { Chart } from "react-charts";

export default function Teste() {
	const data = React.useMemo(
		() => [
			{
				label: "Series 1",
				data: [
					[0, 1],
					[1, 3],
					[2, 4],
					[3, 2],
					[4, 7],
				],
			},
			{
				label: "Series 2",
				data: [
					[0, 3],
					[1, 1],
					[2, 5],
					[3, 6],
					[4, 4],
				],
			},
		],
		[]
	);

	const axes = React.useMemo(
		() => [
			{ primary: true, type: "linear", position: "bottom" },
			{ type: "linear", position: "left" },
		],
		[]
	);

	const lineChart = (
		// A react-chart hyper-responsively and continuously fills the available
		// space of its parent element automatically
		<div
			style={{
				width: "90%",
				height: "600px",
                margin: "auto"
			}}
		>
			<Chart data={data} axes={axes} />
		</div>
	);

    return (
        lineChart
    )
}
