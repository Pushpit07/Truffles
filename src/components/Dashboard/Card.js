import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, animate } from "framer-motion";

export default function Card({ imgSrc, text, balance }) {
	const [rounded, setRounded] = useState(99999);

	function padZeros(n, width) {
		n = n + "";
		return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
	}

	useEffect(() => {
		const animation = animate(99999, balance, {
			duration: 3,
			onUpdate: (latest) => {
				setRounded(padZeros(Math.round(latest), 5).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			},
		});
		return animation.stop;
	}, [balance]);

	return (
		<motion.div
			className="flex basis-1/2 justify-between p-8 bg-light-100 rounded-2xl shadow-xl shadow-black/[.05]"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				ease: [0, 0.7, 0.2, 1.01],
			}}
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
		>
			<div className="flex flex-col gap-y-4">
				<div className="text-dark-200 text-base">{text}</div>
				<div className="flex text-dark-500 font-bold text-2xl">
					$<motion.h1>{rounded.toLocaleString("en-US")}</motion.h1>
				</div>
			</div>
			<div>
				<div className="flex justify-center itmes-center p-4 rounded-lg bgGradient shadow-md">
					<Image src={imgSrc} width="30" height="30" alt="Dashboard" />
				</div>
			</div>
		</motion.div>
	);
}
