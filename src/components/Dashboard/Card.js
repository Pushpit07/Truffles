import Image from "next/image";

export default function Card({ imgSrc, text, balance }) {
	return (
		<div className="flex basis-1/2 justify-between p-8 bg-light-100 rounded-2xl shadow-xl shadow-black/[.05]">
			<div className="flex flex-col gap-y-4">
				<div className="text-dark-200 text-base">{text}</div>
				<div className="text-dark-500 font-bold text-2xl">{balance}</div>
			</div>
			<div>
				<div className="flex justify-center itmes-center p-4 rounded-lg bgGradient shadow-md">
					<Image src={imgSrc} width="30" height="30" alt="Dashboard" />
				</div>
			</div>
		</div>
	);
}
