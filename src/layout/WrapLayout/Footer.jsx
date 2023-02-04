import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/site_logo.png";

const Footer = () => {
	return (
		<div className="flex justify-center w-full bg-light-100 border-t border-gray-200">
			<div className="footer bg-light-100">
				<div className="w-full flex sm:flex-row flex-col justify-between items-center">
					<div className="sm:order-first order-1 sm:mt-0 mt-8">
						<Link href="/" passHref>
							<Image src={logo} alt="Truffles logo" width="200" className="rounded-md" />
						</Link>
					</div>
					<div className="order-first flex gap-x-8">
						<Link href="/">
							<p className="font-primary sm:text-lg text-base cursor-pointer hover:text-primary-500 transition duration-300">Home</p>
						</Link>
						<Link href="/enter-information?step=1">
							<p className="font-primary sm:text-lg text-base cursor-pointer hover:text-primary-500 transition duration-300">Registration Form</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
