import RegistrationStep from "@/components/Registration/RegistrationStep";

export default function Sidebar({ step, setStep }) {
	return (
		<div className="basis-full md:basis-1/5 p-12 space-y-4">
			<ol className="flex flex-col items-start w-full space-y-8">
				<RegistrationStep
					text="USER INFORMATION"
					isActive={step === 1}
					onClick={() => {
						setStep(1);
					}}
					isComplete={step > 1}
				/>
				<RegistrationStep
					text="BUSINESS INFORMATION"
					isActive={step === 2}
					onClick={() => {
						setStep(2);
					}}
					isComplete={step > 2}
				/>
				<RegistrationStep
					text="ADMIN AND OPERATIONS"
					isActive={step === 3}
					onClick={() => {
						setStep(3);
					}}
					isComplete={step > 3}
				/>
				<RegistrationStep
					text="UPLOAD DOCUMENTS"
					isActive={step === 4}
					onClick={() => {
						setStep(4);
					}}
					isComplete={step > 4}
				/>
				<RegistrationStep
					text="PREVIEW"
					isActive={step === 5}
					onClick={() => {
						setStep(5);
					}}
					isComplete={step > 5}
					lastStep={true}
				/>
			</ol>
		</div>
	);
}
