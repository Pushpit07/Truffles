import TextInput from "./Inputs/TextInput";
import Dropdown from "./Inputs/Dropdown";
import DateSelector from "./Inputs/DateSelector";
import ActionButtons from "./ActionButtons";

const BusinessInformation = ({ nextStep, prevStep, incorporationDate, setIncorporationDate }) => {
	return (
		<div className="basis-full md:basis-4/5 flex flex-col py-12 md:px-24 px-8 gap-y-8 bg-light-100 min-h-screen">
			<div>
				<h2 className="text-xl font-semibold">Business Information</h2>
				<p className="mt-1 text-sm text-dark-300">Use a permanent address where you can receive mail</p>
			</div>

			<TextInput label="Account ID" />
			<TextInput label="Company Name" />

			<div className="w-full flex gap-x-5">
				<Dropdown label="Country of Incorporation" id="countryOfIncorporation" options={["United States", "India"]} />
				<Dropdown label="Country of Operation" id="countryOfOperation" options={["United States", "India"]} />
			</div>

			<Dropdown label="Business Type" id="businessType" options={["United States", "India"]} />

			<TextInput label="Company Address" />

			<div className="w-full flex gap-x-5">
				<TextInput label="ZIP / Postal" />
				<TextInput label="State / Province" />
				<TextInput label="City" />
			</div>

			<TextInput label="Registration Number" />

			<DateSelector label="Incorporation Date" startDate={incorporationDate} setStartDate={setIncorporationDate} />

			<ActionButtons nextStep={nextStep} prevStep={prevStep} />
		</div>
	);
};

export default BusinessInformation;
