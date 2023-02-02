import Image from "next/image";

export default function SidebarButton({ imgSrc, text, active }) {
	return (
		<div className={"flex items-center px-4 py-3 gap-x-3 rounded-md " + (active ? "bg-light-100" : "")}>
			<div className={"p-2 rounded-lg " + (active ? "bgGradient" : "bg-light-100 shadow-md")}>
				<Image src={imgSrc} width="15" height="15" alt="Dashboard" />
			</div>
			{text}
		</div>
	);
}
