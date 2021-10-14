import { getSession } from "next-auth/client";
import Auth from "../../components/authPage/auth";
import Head from 'next/head';

function SignInPage() {
    return <>
        <Head>
            <title>Auth</title>
        </Head>
        <Auth />
    </>
}
export default SignInPage;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })

    if (session) {
        return {
            redirect: {
                destination: '/account',
                permanent: false
            }
        };
    }

    return {
        props: { session },
    }
}