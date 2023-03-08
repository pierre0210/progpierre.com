/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['i.imgur.com', 'cdn.jsdelivr.net', 'skillicons.dev'],
	},
};

module.exports = nextConfig;
