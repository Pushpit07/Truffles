import Head from "next/head";
import { motion } from "framer-motion";
import { meta_description } from "@/config/constants";
import Sidebar from "@/components/Dashboard/Sidebar";
import CompleteKycReminder from "@/components/Dashboard/CompleteKycReminder";
import BalanceCard from "@/components/Dashboard/BalanceCard";
import AssetsAndLiabilitiesChart from "@/components/Dashboard/AssetsAndLiabilitiesChart";
import MonthCalendar from "@/components/Dashboard/MonthCalendar";
import Position from "@/components/Dashboard/Position";

export default function Dashboard() {
	return (
		<>
			<Head>
				<title>Truffles | Dashboard</title>
				<meta name="description" content={meta_description} />
			</Head>

			<main className="flex flex-col items-center justify-center w-full bg-light-200">
				<div className="w-full max-w-[1920px] flex justify-center items-start min-h-screen">
					<div className="relative w-full flex flex-col md:flex-row pr-6">
						<Sidebar />

						<div className="basis-full md:basis-4/5 flex flex-col py-10 gap-y-4 pl-6 md:pl-0">
							<CompleteKycReminder />

							<div className="w-full flex flex-col xl:flex-row justify-between items-start gap-5">
								<div className="xl:w-4/6 w-full grid grid-cols-2 sm:gap-5 gap-2 justify-between items-center">
									<BalanceCard imgSrc="/dashboard/fiat.png" text="Fiat Balance" balance={0} />
									<BalanceCard imgSrc="/dashboard/crypto_balance.png" text="Crypto Balance" balance={0} />
									<BalanceCard imgSrc="/dashboard/receivable.png" text="Receivable" balance={0} />
									<BalanceCard imgSrc="/dashboard/payables.png" text="Payables" balance={0} />

									<AssetsAndLiabilitiesChart />
								</div>

								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									className="xl:w-2/6 w-full sm:p-8 p-4 bg-light-100 shadow-xl shadow-black/[.05] rounded-xl h-full"
								>
									<MonthCalendar />

									<div className="first:py-2 mt-2">
										<Position trend={"uptrend"} ticker={"QUICKSILVER LLC"} tfid={"8045780"} price={145000} />
										<Position trend={"downtrend"} ticker={"QUICKSILVER LLC"} tfid={"8045780"} price={145000} />
										<Position trend={"downtrend"} ticker={"QUICKSILVER LLC"} tfid={"8045780"} price={145000} />
										<Position trend={"uptrend"} ticker={"QUICKSILVER LLC"} tfid={"8045780"} price={145000} />
										<Position trend={"downtrend"} ticker={"QUICKSILVER LLC"} tfid={"8045780"} price={145000} />
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
