import Image from "next/image";
import DatePicker from "react-datepicker";
import Button from "@/components/Button";

const BusinessInformation = ({ nextStep, prevStep, startDate, setStartDate }) => {
	return (
		<div className="basis-full md:basis-4/5 flex flex-col py-12 md:px-24 px-8 gap-y-8 bg-light-100 min-h-screen">
			<div>
				<h2 className="text-xl font-semibold">Business Information</h2>
				<p className="mt-1 text-sm text-dark-300">Use a permanent address where you can receive mail</p>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Account ID</p>
				<input
					type="text"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
				/>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Company Name</p>
				<input
					type="text"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
				/>
			</div>

			<div className="w-full flex gap-x-5">
				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Country of Incorporation</p>
					<select
						id="countryOfIncorporation"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
					>
						<option name="countryOfIncorporation" value="United States">
							United States
						</option>
						<option name="countryOfIncorporation" value="India">
							India
						</option>
					</select>
				</div>
				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Country of Operation</p>
					<select
						id="countryOfOperation"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
					>
						<option name="countryOfOperation" value="United States">
							United States
						</option>
						<option name="countryOfOperation" value="India">
							India
						</option>
					</select>
				</div>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Business Type</p>
				<select
					id="businessType"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
				>
					<option name="businessType" value="United States">
						United States
					</option>
					<option name="businessType" value="India">
						India
					</option>
				</select>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Company Address</p>
				<input
					type="text"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
				/>
			</div>

			<div className="w-full flex gap-x-5">
				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">ZIP / Postal</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>

				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">State / Province</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>

				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">City</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Registration Number</p>
				<input
					type="text"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
				/>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Incorporation Date</p>
				<div className="relative rounded-md">
					<div className="absolute inset-y-0 left-4 flex items-center z-[20]">
						<Image src="/calendar.png" width={14} height={14} alt="calendar" />
					</div>
					<DatePicker
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						minDate={new Date()}
						dateFormat="dd/MM/yyyy"
						fixedHeight
						showDisabledMonthNavigation
						disabledKeyboardNavigation
						showPopperArrow={false}
					/>
				</div>
			</div>

			<div className="flex justify-between mt-8">
				<Button secondary={true} type="button" onClick={() => prevStep()}>
					Back
				</Button>
				<Button primary={true} type="button" onClick={() => nextStep()}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default BusinessInformation;
