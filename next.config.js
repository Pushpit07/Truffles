/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

// module.exports = nextConfig
module.exports = {
	images: {
		domains: ["lh3.googleusercontent.com"],
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
			config.resolve.fallback.tls = false;
			config.resolve.fallback.net = false;
			config.resolve.fallback.child_process = false;
		}

		return config;
	},
};
