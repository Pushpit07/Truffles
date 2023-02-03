import { useRef, useEffect } from "react";
import Head from "next/head";
import { title_main_page, meta_description } from "@/config/constants";
import Image from "next/image";
import SidebarButton from "@/components/Dashboard/SidebarButton";
import Card from "@/components/Dashboard/Card";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";

export default function HomePage() {
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
					lineTension: 0.4,
				},
				{
					backgroundColor: greenGradient,
					label: "Assets",
					data: greenWeights,
					fill: true,
					borderWidth: 3,
					borderColor: colors.green.default,
					lineTension: 0.4,
				},
			],
		};

		const config = {
			type: "line",
			data: data,
			options: {
				responsive: true,
				// maintainAspectRatio: true,
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
		<>
			<Head>
				<title>{title_main_page}</title>
				<meta name="description" content={meta_description} />
			</Head>

			<main className="flex flex-col items-center justify-center w-full bg-light-200">
				<div className="w-full max-w-[1920px] flex justify-center items-start min-h-screen">
					<div className="relative w-full flex flex-row pr-6">
						<motion.div className="basis-1/5 p-10 space-y-4">
							<SidebarButton imgSrc="/dashboard/dashboard.png" text="Dashboard" active={true} />
							<SidebarButton imgSrc="/dashboard/invoice.png" text="Invoice" />
							<SidebarButton imgSrc="/dashboard/proforma.png" text="Proforma" />
							<SidebarButton imgSrc="/dashboard/swap.png" text="Swap" />
							<SidebarButton imgSrc="/dashboard/transfer.png" text="Transfer" />
							<SidebarButton imgSrc="/dashboard/contacts.png" text="Contacts" />
						</motion.div>

						<div className="basis-4/5 py-10 gap-y-4">
							<div className="bg-primary-500 rounded-lg py-5 px-6">
								<div className="flex flex-row justify-between items-center text-light-100">
									<div className="flex flex-row items-center gap-x-5">
										<Image src="/dashboard/attention.png" alt="attention" width="27" height="27" />
										<div>
											<p>Please complete the KYC</p>
											<p className="text-xs">
												Please follow the instructions in the email to complete account verification. Make sure to check your
												promotions/spam as well.
											</p>
										</div>
									</div>
									<Image src="/dashboard/close.png" alt="close" width="20" height="20" />
								</div>
							</div>

							<div className="w-full flex flex-row justify-between items-start gap-x-5 mt-6">
								<div className="w-4/6 grid grid-cols-2 gap-5 justify-between items-center">
									<Card imgSrc="/dashboard/fiat.png" text="Fiat Balance" balance={0} />
									<Card imgSrc="/dashboard/crypto_balance.png" text="Crypto Balance" balance={0} />
									<Card imgSrc="/dashboard/receivable.png" text="Receivable" balance={0} />
									<Card imgSrc="/dashboard/payables.png" text="Payables" balance={0} />

									<div className="col-span-2 p-8 bg-light-100 shadow-xl shadow-black/[.05] rounded-xl h-full">
										<div className="flex flex-col gap-y-4">
											<div className="text-dark-200 text-base">Assets & Liabilities</div>
											<canvas id="myChart" ref={canvasEl} height="350" />
										</div>
									</div>
								</div>

								<div className="w-2/6 p-8 bg-light-100 shadow-xl shadow-black/[.05] rounded-xl h-full"></div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
