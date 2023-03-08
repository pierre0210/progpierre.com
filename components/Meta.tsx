import Head from "next/head";

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
			<meta property="og:image" content={thumbnail} />
			<meta name="description" content={description} />
			<meta name="theme-color" content={themeColor} />
		</Head>
	);
};

export default Meta;