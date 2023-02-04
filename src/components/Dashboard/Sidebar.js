import { motion, AnimatePresence } from "framer-motion";
import SidebarButton from "./SidebarButton";

export default function Sidebar() {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				className="basis-full md:basis-1/5 p-10 space-y-4"
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<SidebarButton imgSrc="/dashboard/dashboard.png" text="Dashboard" active={true} />
				<SidebarButton imgSrc="/dashboard/invoice.png" text="Invoice" />
				<SidebarButton imgSrc="/dashboard/proforma.png" text="Proforma" />
				<SidebarButton imgSrc="/dashboard/swap.png" text="Swap" />
				<SidebarButton imgSrc="/dashboard/transfer.png" text="Transfer" />
				<SidebarButton imgSrc="/dashboard/contacts.png" text="Contacts" />
			</motion.div>
		</AnimatePresence>
	);
}
