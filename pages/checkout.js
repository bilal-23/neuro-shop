import Checkout from "../components/checkoutPage/checkout";
import { getSession } from 'next-auth/client';
import Head from 'next/head';


function CheckoutPage() {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Checkout />
        </>
    )
}
export default CheckoutPage;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    return {
        props: { session },
    }
}