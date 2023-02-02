import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { title_main_page, meta_description } from "@/config/constants";
import ScrollToPageTop from "@/utils/ScrollToPageTop";
import UserInformation from "@/components/EnterInformation/UserInformation";
import BusinessInformation from "@/components/EnterInformation/BusinessInformation";
import EmptySection from "@/components/EnterInformation/EmptySection";
import Sidebar from "@/components/EnterInformation/Sidebar";

export default function EnterInformation() {
	const router = useRouter();

	const [step, setStep] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [pageTitle, setPageTitle] = useState("User Information");

	useEffect(() => {
		if (step == 1) {
			router.replace("/enter-information?step=1");
			setPageTitle("User Information");
		} else if (step == 2) {
			router.replace("/enter-information?step=2");
			setPageTitle("Business Information");
		} else if (step == 3) {
			router.replace("/enter-information?step=3");
			setPageTitle("Admin and Operations");
		} else if (step == 4) {
			router.replace("/enter-information?step=4");
			setPageTitle("Upload Documents");
		} else if (step == 5) {
			router.replace("/enter-information?step=5");
			setPageTitle("Preview");
		}
	}, [step]);

	// Continue to next step
	const nextStep = () => {
		setStep((currStep) => currStep + 1);
	};

	// Revert to previous step
	const prevStep = () => {
		if (step == 1) return;
		setStep((currStep) => currStep - 1);
	};

	const step1Values = { nextStep, prevStep, startDate, setStartDate };
	const step2Values = { nextStep, prevStep, startDate, setStartDate };

	const webpageTitle = `${title_main_page} | ${pageTitle}`;

	return (
		<>
			<Head>
				<title>{webpageTitle}</title>
				<meta name="description" content={meta_description} />
			</Head>
			<ScrollToPageTop samePage={true} changingValue={step} />

			<main className="flex flex-col items-center justify-center w-full bg-light-200">
				<div className="w-full max-w-[1920px] flex justify-center items-start min-h-screen">
					<div className="relative w-full h-full flex flex-row">
						<Sidebar step={step} setStep={setStep} />
						{step == 1 ? <UserInformation {...step1Values} /> : step == 2 ? <BusinessInformation {...step2Values} /> : <EmptySection />}
					</div>
				</div>
			</main>
		</>
	);
}