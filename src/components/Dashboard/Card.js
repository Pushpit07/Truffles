import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { motion, animate } from "framer-motion";
import StatusContext from "@/store/status-context";

export default function Card({ imgSrc, text, balance }) {
	const [, , , setError] = useContext(StatusContext);
	const [rounded, setRounded] = useState(99999);

	function padZeros(n, width) {
		n = n + "";
		return n.length >= width ? n : new Array(width - n.length + 1).join("0") + n;
	}
	useEffect(() => {
		const animation = animate(99999, balance, {
			duration: 2,
			onUpdate: (latest) => {
				setRounded(padZeros(Math.round(latest), 5).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
			},
		});
		return animation.stop;
	}, [balance]);

	return (
		<motion.div
			className="flex basis-1/2 justify-between sm:p-8 py-4 pl-4 pr-2 bg-light-100 sm:rounded-2xl rounded-xl shadow-xl shadow-black/[.05] cursor-pointer"
			initial={{ opacity: 0, scale: 0.6 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				ease: [0, 0.7, 0.2, 1.01],
				type: "spring",
				stiffness: 150,
				damping: 10,
			}}
			whileHover={{
				scale: 1.04,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.95 }}
			onClick={() =>
				setError({
					title: "Oops! This doesn't work yet!",
					message: "Will make it work when I join the team ;)",
					showErrorBox: true,
				})
			}
		>
			<div className="flex flex-col gap-y-4">
				<div className="text-dark-200 sm:text-base text-xs">{text}</div>
				<div className="flex text-dark-500 font-bold sm:text-2xl text-lg">
					$<motion.h1>{rounded.toLocaleString("en-US")}</motion.h1>
				</div>
			</div>
			<div>
				<div className="sm:block hidden justify-center itmes-center p-4 rounded-md bgGradient shadow-md">
					<Image src={imgSrc} width="30" height="30" alt="Dashboard" />
				</div>
				<div className="block sm:hidden justify-center itmes-center p-2 rounded-md bgGradient shadow-md -mt-2">
					<Image src={imgSrc} width="16" height="16" alt="Dashboard" />
				</div>
			</div>
		</motion.div>
	);
}
