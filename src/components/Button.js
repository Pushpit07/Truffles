export default function Button({
	primary = false,
	secondary = false,
	outline = false,
	light = false,
	error = false,
	onClick,
	children,
	classes,
	type,
	disabled,
	isLoading = false,
}) {
	return (
		<button
			type={type ? type : "submit"}
			onClick={() => (onClick ? onClick() : {})}
			className={
				`flex items-center justify-center ` +
				(primary
					? (isLoading ? `bg-primary-600` : `bg-primary-500 hover:bg-primary-600`) +
					  ` font-medium rounded-md shadow-sm text-light-100 cursor-pointer transition duration-300  ${classes ? classes : "text-base px-10 py-2 "}`
					: secondary
					? ` bg-white hover:bg-gray-100 text-gray-600 font-medium border border-gray-300 rounded-md cursor-pointer transition duration-300  ${
							classes ? classes : "text-base px-10 py-2 "
					  }`
					: outline
					? ` bg-dark-600 hover:bg-primary-600 border-2 border-primary-500 font-primary font-semibold transition duration-300 cursor-pointer  ${
							classes ? classes : "text-lg px-8 py-2"
					  }`
					: error
					? ` bg-error-400 hover:bg-error-500 font-primary font-semibold text-light-100 transition duration-300 cursor-pointer ${
							classes ? classes : "text-lg px-8 py-2"
					  }`
					: light
					? ` bg-light-300/70 hover:bg-primary-500 font-primary font-semibold text-dark-600 hover:text-light-100 transition duration-200 cursor-pointer ${
							classes ? classes : "text-lg px-8 py-2"
					  }`
					: ` bg-light-100 hover:bg-light-200 font-primary font-semibold text-dark-600 transition duration-300 cursor-pointer ${
							classes ? classes : "text-lg px-8 py-2"
					  }`)
			}
			disabled={disabled ? disabled : false}
		>
			{isLoading ? <span className="loader"></span> : children}
		</button>
	);
}
