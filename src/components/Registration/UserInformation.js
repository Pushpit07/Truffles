import { countryCodes } from "@/config/constants";
import TextInput from "./Inputs/TextInput";
import Dropdown from "./Inputs/Dropdown";
import DateSelector from "./Inputs/DateSelector";
import ActionButtons from "./ActionButtons";

const UserInformation = ({ nextStep, prevStep, dateOfBirth, setDateOfBirth }) => {
	return (
		<div className="basis-full md:basis-4/5 flex flex-col py-12 md:px-24 px-8 gap-y-8 bg-light-100 min-h-screen">
			<div>
				<h2 className="text-xl font-semibold">User Information</h2>
				<p className="mt-1 text-sm text-dark-300">Please enter your details</p>
			</div>

			<div className="w-full flex gap-x-5">
				<Dropdown label="Title" id="title" options={["Mr.", "Mrs.", "Ms.", "Dr."]} />
				<TextInput label="First name" />
				<TextInput label="Last name" />
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Mobile Number</p>
				<div className="relative rounded-md">
					<div className="absolute inset-y-0 left-0 flex items-center">
						<select
							id="countryCode"
							name="countryCode"
							className="focus:ring-primary-500 focus:border-primary-500 h-full py-0 px-4 pr-10 border-r border-gray-300 bg-transparent text-dark-300 text-sm rounded-l-md cursor-pointer"
						>
							{countryCodes.map((countryCode) => {
								return (
									<option key={countryCode} value={countryCode}>
										{countryCode}
									</option>
								);
							})}
						</select>
					</div>
					<input
						type="text"
						name="address"
						id="address"
						className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-24 text-sm border-gray-300 rounded-md"
						placeholder="+1 (555) 987-6543"
						autoComplete="off"
					/>
				</div>
			</div>

			<Dropdown label="Gender" id="gender" options={["Male", "Female"]} />
			<Dropdown label="Nationality" id="nationality" options={["United States", "India"]} />

			<div className="w-full flex gap-x-5">
				<TextInput label="Residential Address" />
				<TextInput label="Postal Code" />
			</div>

			<TextInput label="Occupation" />
			<DateSelector label="Date of Birth" startDate={dateOfBirth} setStartDate={setDateOfBirth} />

			<ActionButtons nextStep={nextStep} prevStep={prevStep} />
		</div>
	);
};

export default UserInformation;
