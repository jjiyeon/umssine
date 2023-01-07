import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Umssine</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
