import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import 'animate.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Head>
				<title>PULL&BEAR - Clone Website</title>
				<link rel="icon" href="/pull&bear.ico" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default MyApp