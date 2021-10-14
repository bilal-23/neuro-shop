import ErrorPage from "../components/ui/error-page";
import Head from 'next/head';

function NotFound() {

    return <>
        <Head>
            <title>Error - Not Found</title>
        </Head>
        <ErrorPage />
    </>
}
export default NotFound;