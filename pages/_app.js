import Router from "next/router"
import NProgress from "nprogress"
import Head from 'next/head';
import Layout from '../components/layout/layout'
import '../styles/globals.css'

Router.onRouteChangeStart = url => {
  NProgress.configure({ showSpinner: false }).start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp
