import Image from "next/image";
import logo from "../../../public/site_logo.png";

const Footer = () => {
	return (
		<div className="flex justify-center w-full bg-light-100 border-t border-gray-200">
			<div className="footer bg-light-100">
				<div className="w-full flex justify-between items-center">
					<Image src={logo} alt="P~P logo" width="200" className="rounded-md" />
					<p className="font-primary sm:text-lg text-base text-primary-500"></p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
