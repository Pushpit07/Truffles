import Image from "next/image";
import DatePicker from "react-datepicker";
import { countryCodes } from "@/config/constants";
import Button from "@/components/Button";

const UserInformation = ({ nextStep, prevStep, startDate, setStartDate }) => {
	return (
		<div className="basis-full md:basis-4/5 flex flex-col py-12 md:px-24 px-8 gap-y-8 bg-light-100 min-h-screen">
			<div>
				<h2 className="text-xl font-semibold">User Information</h2>
				<p className="mt-1 text-sm text-dark-300">Please enter your details</p>
			</div>

			<div className="w-full flex gap-x-5">
				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Title</p>
					<select
						id="title"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
					>
						<option name="title" value="mr">
							Mr.
						</option>
						<option name="title" value="mrs">
							Mrs.
						</option>
						<option name="title" value="ms">
							Ms.
						</option>
						<option name="title" value="dr">
							Dr.
						</option>
					</select>
				</div>

				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">First name</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>

				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Last name</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Mobile Number</p>
				<div className="relative rounded-md">
					<div className="absolute inset-y-0 left-0 flex items-center">
						<label htmlFor="countryCode" className="sr-only">
							countryCode
						</label>
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

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Gender</p>
				<select
					id="gender"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
				>
					<option name="gender" value="male">
						Male
					</option>
					<option name="gender" value="female">
						Female
					</option>
				</select>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Nationality</p>
				<select
					id="nationality"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-pointer"
				>
					<option name="nationality" value="United States">
						United States
					</option>
					<option name="nationality" value="India">
						India
					</option>
				</select>
			</div>

			<div className="w-full flex gap-x-5">
				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Residential Address</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>

				<div className="w-full flex flex-col justify-end">
					<p className="text-dark-400 text-sm font-medium mb-1">Postal Code</p>
					<input
						type="text"
						className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
					/>
				</div>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Occupation</p>
				<input
					type="text"
					className="w-full focus:ring-primary-500 focus:border-primary-500 transition duration-300 text-dark-300 border-gray-300 text-sm rounded-md cursor-text form-input block"
				/>
			</div>

			<div className="w-full flex flex-col justify-end">
				<p className="text-dark-400 text-sm font-medium mb-1">Date of Birth</p>
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

export default UserInformation;
