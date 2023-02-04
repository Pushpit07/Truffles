const EmptySection = () => {
	return (
		<div className="basis-full md:basis-4/5 flex flex-col py-12 md:px-24 px-8 gap-y-8 bg-light-100 md:min-h-screen">
			<div className="w-full h-full md:-mt-20 flex flex-col justify-center items-center">
				<h1 className="text-2xl md:text-3xl font-bold text-center">Oops! No content here</h1>
				<h1 className="text-2xl md:text-3xl font-bold text-center">It&apos;ll be done as soon as I join the team ;)</h1>
			</div>
		</div>
	);
};

export default EmptySection;
