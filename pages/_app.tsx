/* eslint-disable react/no-unescaped-entities */
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Pierre's Note</title>
			</Head>
			<Component {...pageProps} />
		</>
		
	);
}

export default MyApp
