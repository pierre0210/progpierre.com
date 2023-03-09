import Head from "next/head";
import favicon from '../public/favicon.ico';

type metadata = {
	title: string;
	thumbnail: string;
	description: string;
	themeColor: string;
};

const Meta = ({ title, thumbnail, description, themeColor }: metadata) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="shortcut icon" href={favicon.src} />
			<meta property="og:image" content={thumbnail} />
			<meta name="description" content={description} />
			<meta name="theme-color" content={themeColor} />
		</Head>
	);
};

export default Meta;