import { useContext } from "react";
import Image from "next/image";
import StatusContext from "@/store/status-context";

export default function SidebarButton({ imgSrc, text, active }) {
	const [, , , setError] = useContext(StatusContext);

	return (
		<div
			className={
				"flex items-center px-4 py-3 gap-x-3 rounded-md " + (active ? "bg-light-100" : "hover:bg-light-300 cursor-pointer transition duration-300")
			}
			onClick={() => {
				if (!active) {
					setError({
						title: "Oops! This doesn't work yet!",
						message: "Will make it work when I join the team ;)",
						showErrorBox: true,
					});
				}
			}}
		>
			<div className={"p-2 rounded-lg " + (active ? "bgGradient" : "bg-light-100 shadow-md")}>
				<Image src={imgSrc} width="15" height="15" alt="Dashboard" />
			</div>
			{text}
		</div>
	);
}
