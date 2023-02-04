import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";

export default function Sidebar() {
	const canvasEl = useRef(null);

	useEffect(() => {
		const colors = {
			orange: {
				default: "rgba(255, 133, 64, 1)",
				half: "rgba(255, 133, 64, 0.1)",
				quarter: "rgba(255, 133, 64, 0)",
				zero: "rgba(255, 133, 64, 0)",
			},
			green: {
				default: "rgba(130, 214, 22, 1)",
				half: "rgba(130, 214, 22, 0.1)",
				quarter: "rgba(130, 214, 22, 0)",
				zero: "rgba(130, 214, 22, 0)",
			},
		};

		const ctx = canvasEl.current.getContext("2d");

		const orangeGradient = ctx.createLinearGradient(0, 16, 0, 600);
		orangeGradient.addColorStop(0, colors.orange.half);
		orangeGradient.addColorStop(0.4, colors.orange.quarter);
		orangeGradient.addColorStop(1, colors.orange.zero);

		const greenGradient = ctx.createLinearGradient(0, 16, 0, 600);
		greenGradient.addColorStop(0, colors.green.half);
		greenGradient.addColorStop(0.4, colors.green.quarter);
		greenGradient.addColorStop(1, colors.green.zero);

		const greenWeights = [50, 30, 300, 200, 500, 275, 400, 240, 500];
		const orangeWeights = [30, 110, 200, 30, 150, 100, 440, 70, 420];

		const labels = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const data = {
			labels: labels,
			datasets: [
				{
					backgroundColor: orangeGradient,
					label: "Liabilities",
					data: orangeWeights,
					fill: true,
					borderWidth: 3,
					borderColor: colors.orange.default,
					lineTension: 0.45,
				},
				{
					backgroundColor: greenGradient,
					label: "Assets",
					data: greenWeights,
					fill: true,
					borderWidth: 3,
					borderColor: colors.green.default,
					lineTension: 0.45,
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					legend: {
						display: true,
						position: "bottom",
						align: "start",
						labels: {
							boxHeight: 0,
							boxWidth: 20,
							padding: 30,
						},
					},
				},
				elements: {
					point: {
						radius: 0,
					},
				},
				scales: {
					x: {
						grid: {
							display: false,
							drawBorder: false,
							drawOnChartArea: false,
						},
						border: {
							display: false,
						},
						ticks: {
							padding: 10,
						},
					},
					y: {
						ticks: {
							display: true,
							stepSize: 100,
							padding: 14,
						},
						border: {
							dash: (ctx) => ctx.index !== 0 && [6, 5],
							display: false,
						},
						grid: {
							drawTicks: false,
						},
					},
				},
			},
		};
		const myLineChart = new Chart(ctx, config);

		return function cleanup() {
			myLineChart.destroy();
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="col-span-2 sm:p-8 p-4 bg-light-100 shadow-xl shadow-black/[.05] rounded-xl h-full"
		>
			<div className="flex flex-col gap-y-4">
				<div className="text-dark-200 text-base">Assets & Liabilities</div>
				<canvas id="myChart" ref={canvasEl} height="350" />
			</div>
		</motion.div>
	);
}
