import { useState, useEffect } from "react";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import "@/styles/globals.css";
import * as ga from "@/lib/google-analytics";
import Layout from "@/layout/WrapLayout/Layout";
import ScrollToPageTop from "@/utils/ScrollToPageTop";
import StatusContext from "@/store/status-context";
import LoadingContext from "@/store/loading-context";
import AuthModalContext from "@/store/authModal-context";

export default function App({ Component, pageProps, session, router }) {
	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete");
		};
	}, [router.events]);

	const [isLoading, setLoading] = useState({
		status: false,
		title: "",
		message: "",
		waitMessage: "",
		showProgressBar: false,
		progress: 0,
	});
	const [error, setError] = useState({
		title: "",
		message: "",
		showErrorBox: false,
	});
	const [success, setSuccess] = useState({
		title: "",
		message: "",
		showSuccessBox: false,
	});
	const [authModalOpen, setAuthModalOpen] = useState(false);

	return (
		<>
			{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
				strategy="afterInteractive"
				onError={(err) => {}}
			/>
			<Script id="google-analytics" strategy="afterInteractive" onError={(err) => {}}>
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
			</Script>
			<Script src="https://kit.fontawesome.com/8f4546bba1.js" crossOrigin="anonymous"></Script>
			<Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>

			<SessionProvider session={session}>
				<LoadingContext.Provider value={[isLoading, setLoading]}>
					<AuthModalContext.Provider value={[authModalOpen, setAuthModalOpen]}>
						<StatusContext.Provider value={[error, success, setSuccess, setError]}>
							<Layout>
								<ScrollToPageTop />
								<Component {...pageProps} />
							</Layout>
						</StatusContext.Provider>
					</AuthModalContext.Provider>
				</LoadingContext.Provider>
			</SessionProvider>
		</>
	);
}
