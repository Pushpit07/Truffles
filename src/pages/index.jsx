import Head from "next/head";
import { title_main_page, meta_description } from "@/config/constants";
import Image from "next/image";
import SidebarButton from "@/components/Dashboard/SidebarButton";
import Card from "@/components/Dashboard/Card";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>{title_main_page}</title>
				<meta name="description" content={meta_description} />
			</Head>

			<main className="flex flex-col items-center justify-center w-full bg-light-200">
				<div className="w-full max-w-[1920px] flex justify-center items-start min-h-screen">
					<div className="relative w-full flex flex-row pr-6">
						<div className="basis-1/5 p-10 space-y-4">
							<SidebarButton imgSrc="/dashboard/dashboard.png" text="Dashboard" active={true} />
							<SidebarButton imgSrc="/dashboard/invoice.png" text="Invoice" />
							<SidebarButton imgSrc="/dashboard/proforma.png" text="Proforma" />
							<SidebarButton imgSrc="/dashboard/swap.png" text="Swap" />
							<SidebarButton imgSrc="/dashboard/transfer.png" text="Transfer" />
							<SidebarButton imgSrc="/dashboard/contacts.png" text="Contacts" />
						</div>

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
									<Card imgSrc="/dashboard/fiat.png" text="Fiat Balance" balance="$00,000" />
									<Card imgSrc="/dashboard/crypto_balance.png" text="Crypto Balance" balance="$00,000" />
									<Card imgSrc="/dashboard/receivable.png" text="Receivable" balance="$00,000" />
									<Card imgSrc="/dashboard/payables.png" text="Payables" balance="$00,000" />

									<div className="col-span-2 p-8 bg-light-100 shadow-xl shadow-black/[.05] rounded-xl h-full">
										<div className="flex flex-col gap-y-4">
											<div className="text-dark-200 text-base">Assets & Liabilities</div>
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
