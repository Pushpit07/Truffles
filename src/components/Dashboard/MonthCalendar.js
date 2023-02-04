import { useState } from "react";
import Calendar from "react-calendar";
import { motion } from "framer-motion";

export default function MonthCalendar() {
	const [date, setDate] = useState(new Date(2023, 1, 22));

	return (
		<motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
			<Calendar
				onChange={setDate}
				value={date}
				calendarType="US"
				defaultView="month"
				formatShortWeekday={(locale, date) => {
					return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][date.getDay()];
				}}
				maxDetail="month"
				minDetail="month"
				prevLabel={<i className="fa-solid fa-chevron-left text-[14px] text-neutral-900"></i>}
				nextLabel={<i className="fa-solid fa-chevron-right text-[14px] text-neutral-900"></i>}
				tileClassName={({ activeStartDate, date, view }) => "text-sm " + (date.getDate() === 8 ? "text-[#EF4444]" : "text-neutral-900")}
			/>
		</motion.div>
	);
}
