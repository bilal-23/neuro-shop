import Router from "next/router";
import NProgress from "nprogress";
import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store/index';
import { Provider as AuthProvider } from "next-auth/client";
import CartWrapper from '../components/cart-wrapper';

Router.onRouteChangeStart = url => {
  NProgress.configure({ showSpinner: false }).start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <ReduxProvider store={store}>
          <CartWrapper>
            <Head>
              <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartWrapper>
        </ReduxProvider>
      </AuthProvider>
    </>)
}

export default MyApp