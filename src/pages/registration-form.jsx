import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { title_main_page, meta_description } from "@/config/constants";
import ScrollToPageTop from "@/utils/ScrollToPageTop";
import UserInformation from "@/components/Registration/UserInformation";
import BusinessInformation from "@/components/Registration/BusinessInformation";
import EmptySection from "@/components/Registration/EmptySection";
import Sidebar from "@/components/Registration/Sidebar";

export default function EnterInformation() {
	const router = useRouter();

	const [step, setStep] = useState(parseInt(router.query.step) || 1);
	const [dateOfBirth, setDateOfBirth] = useState(new Date());
	const [incorporationDate, setIncorporationDate] = useState(new Date());
	const [pageTitle, setPageTitle] = useState("User Information");

	useEffect(() => {
		if (step == 1) {
			router.replace("/registration-form?step=1");
			setPageTitle("User Information");
		} else if (step == 2) {
			router.replace("/registration-form?step=2");
			setPageTitle("Business Information");
		} else if (step == 3) {
			router.replace("/registration-form?step=3");
			setPageTitle("Admin and Operations");
		} else if (step == 4) {
			router.replace("/registration-form?step=4");
			setPageTitle("Upload Documents");
		} else if (step == 5) {
			router.replace("/registration-form?step=5");
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

	const step1Values = { nextStep, prevStep, dateOfBirth, setDateOfBirth };
	const step2Values = { nextStep, prevStep, incorporationDate, setIncorporationDate };

	const webpageTitle = `${title_main_page} | ${pageTitle}`;
	return (
		<>
			<Head>
				<title>{webpageTitle}</title>
				<meta name="description" content={meta_description} />
			</Head>
			<ScrollToPageTop samePage={true} changingValue={step} />

			<main className="flex flex-col items-center justify-center w-full bg-light-200">
				<div className="w-full max-w-[1920px] flex justify-center items-start">
					<div className="relative w-full h-full flex flex-col md:flex-row">
						<Sidebar step={step} setStep={setStep} />
						{step == 1 ? <UserInformation {...step1Values} /> : step == 2 ? <BusinessInformation {...step2Values} /> : <EmptySection />}
					</div>
				</div>
			</main>
		</>
	);
}
