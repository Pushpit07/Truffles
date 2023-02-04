import Button from "@/components/Button";

export default function ActionButtons({ nextStep, prevStep }) {
	return (
		<div className="flex justify-between mt-8">
			<Button secondary={true} type="button" onClick={() => prevStep()}>
				Back
			</Button>
			<Button primary={true} type="button" onClick={() => nextStep()}>
				Next
			</Button>
		</div>
	);
}
