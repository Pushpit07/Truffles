import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import StatusContext from "@/store/status-context";

export default function Position({ trend, ticker, tfid, price }) {
	const [, , , setError] = useContext(StatusContext);
	const [roundedPrice, setRoundedPrice] = useState(0);

	function padZeros(n, width) {
		n = n + "";
		return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
	}
	useEffect(() => {
		const animation = animate(0, price, {
			duration: 2,
			onUpdate: (latest) => {
				setRoundedPrice(padZeros(Math.round(latest), 6).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			},
		});
		return animation.stop;
	}, [price]);

	return (
		<motion.div
			className="w-full flex flex-row justify-between px-5 py-4 items-center hover:bg-light-200 rounded-lg transition duration-300 cursor-pointer"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			onClick={() =>
				setError({
					title: "Oops! This doesn't work yet!",
					message: "Will make it work when I join the team ;)",
					showErrorBox: true,
				})
			}
		>
			<div className="flex justify-center items-center gap-x-4">
				<Image src={trend == "uptrend" ? "/dashboard/uptrend.png" : "/dashboard/downtrend.png"} height={24} width={24} alt="trend" />
				<div className="w-full flex flex-col">
					<p className="font-medium text-xs text-neutral-900">{ticker}</p>
					<p className="font-medium text-[8px] text-neutral-900 mt-1">TFID: {tfid}</p>
				</div>
			</div>
			<p className="font-medium text-xs text-neutral-900">$ {roundedPrice}.00</p>
		</motion.div>
	);
}
