import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import LoadingContext from "@/store/loading-context";
import AuthModalContext from "@/store/authModal-context";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorBox from "../Modal/ErrorBox";
import SuccessBox from "../Modal/SuccessBox";
import Loading from "../Loading/Loading";
import AuthModal from "../Modal/AuthModal";

const Layout = ({ children }) => {
	const [isLoading, setLoading] = useContext(LoadingContext);
	const [authModalOpen, setAuthModalOpen] = useContext(AuthModalContext);

	const router = useRouter();

	useEffect(() => {
		if (router && router.events) {
			router.events.on("routeChangeStart", () => setLoading((prevState) => ({ ...prevState, status: true })));
			router.events.on("routeChangeComplete", () => setLoading((prevState) => ({ ...prevState, status: false })));
			router.events.on("routeChangeError", () => setLoading((prevState) => ({ ...prevState, status: false })));
		}
	}, [router.events, setLoading]);

	return (
		<>
			<Navbar setAuthModalOpen={setAuthModalOpen} />
			<AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
			{children}
			{isLoading.status && <Loading />}
			<ErrorBox />
			<SuccessBox />
			<Footer />
		</>
	);
};

export default Layout;
