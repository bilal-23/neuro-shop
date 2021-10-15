import Router from "next/router";
import NProgress from "nprogress";
import Layout from '../components/layout/layout';
import '../styles/globals.css';
import '../styles/nprogress.css';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store/index';
import { Provider as AuthProvider } from "next-auth/client";

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </AuthProvider>
    </>)
}

export default MyApp