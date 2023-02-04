import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../../public/site_logo.png";
import { useSession, signOut } from "next-auth/react";
import Button from "@/components/Button";
import StatusContext from "@/store/status-context";

const Navbar = ({ setAuthModalOpen }) => {
	const router = useRouter();
	const { data: session, status } = useSession();
	const [, , , setError] = useContext(StatusContext);

	let truncatedName;
	if (session && session.user && session.user.name) {
		truncatedName = session.user.name ?? "";
		if (session.user.name && session.user.name.length > 10) {
			truncatedName = truncatedName.substring(0, 8) + "...";
		}
	}

	let avatarUrl = session && session.user && session.user.image;

	let truncatedEmail;
	if (session && session.user && session.user.email) {
		truncatedEmail = session.user.email.substring(0, 16) + "...";
	}

	return (
		<div className="flex justify-center w-screen">
			<div className="w-full z-40 max-w-[1920px]">
				<nav
					className={
						"w-full duration-500 ease-in mx-auto border-b border-gray-200 backdrop-blur-[40px] backdrop-brightness-200 " +
						(router.pathname === "/" ? "bg-light-200" : "bg-light-100")
					}
				>
					<div className="flex flex-wrap items-center justify-start w-full pl-4 sm:pl-9 lg:pl-12 sm:pr-6 pr-2 py-4">
						<div className="md:basis-1/5 flex w-fit">
							<Link href="/" passHref>
								<Image src={logo} alt="MXV Logo" width="166" className="rounded-md" />
							</Link>
						</div>

						{/* Internal links */}
						{router.pathname === "/" && (
							<div className="hidden md:block lg:-ml-10 ml-2">
								<ul className="flex flex-row items-center font-medium md:text-base md:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
									<li className="block text-dark-500 font-semibold text-[24px]">Dashboard</li>
								</ul>
							</div>
						)}

						<div className="ml-auto">
							<ul className="flex flex-row items-center text-sm font-medium space-x-8 lg:space-x-3 xl:space-x-6 md:mt-0 sm:text-sm">
								<li className="hidden sm:block">
									Having trouble?{" "}
									<span
										onClick={(e) => {
											e.preventDefault();
											setError({
												title: "Oops! This link doesn't work",
												message: "Will make it work when I join the team ;)",
												showErrorBox: true,
											});
										}}
										className="text-primary-500 hover:text-primary-600 transition duration-300 cursor-pointer text-sm"
									>
										Get Help
									</span>
								</li>
								{/* Dropdown Menu */}
								<li className="block">
									<ul className="relative group dropdown">
										<a
											className="flex items-center dropdown-toggle hidden-arrow"
											id="dropdownMenuButton2"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{status === "authenticated" ? (
												<div className="flex items-center justify-center px-4 py-2 text-sm rounded-full bg-light-300">
													<span className="mr-4">{truncatedName}</span>
													{avatarUrl ? <Image src={avatarUrl} alt="avatar" width="24" height="24" className="rounded-full" /> : null}
												</div>
											) : (
												<Button primary={true} type="button" onClick={() => setAuthModalOpen(true)}>
													Sign In
												</Button>
											)}
										</a>

										{status === "authenticated" && (
											<ul
												className="absolute right-0 left-auto z-10 hidden text-sm font-medium float-left m-0 text-left list-none border-none rounded-xl shadow-lg dropdown-menu min-w-[250px] 
											backdrop-blur-[40px] backdrop-brightness-200 bg-[rgba(255,255,255)]
											bg-clip-padding group-hover:block"
												aria-labelledby="dropdownMenuButton2"
											>
												<li>
													{status === "authenticated" && (
														<div className="flex flex-col px-4 py-3 cursor-pointer rounded-t-xl">
															<div className="flex items-center justify-between w-full bg-transparent rounded-t-xl dropdown-item whitespace-nowrap active:bg-transparent active:dark:text-light-100">
																<div>
																	<p>Email</p>
																	<p>{truncatedEmail}</p>
																</div>
																{avatarUrl ? (
																	<Image
																		src={avatarUrl}
																		alt={"avatar"}
																		width={40}
																		height={40}
																		objectFit="contain"
																		className="rounded-lg"
																	/>
																) : null}
															</div>
														</div>
													)}
												</li>

												{/* Logout Button */}
												<li>
													{status === "authenticated" ? (
														<button
															className="w-full px-4 pt-2 pb-3 font-medium transition-all bg-transparent cursor-pointer rounded-b-xl dark:border-light-300 hover:bg-gray-100 hover:bg-error-600/20"
															onClick={() => signOut()}
														>
															Sign out
														</button>
													) : (
														<span></span>
													)}
												</li>
											</ul>
										)}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
