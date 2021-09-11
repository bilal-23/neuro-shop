import { getSession } from 'next-auth/client';
import Profile from '../components/ProfilePage/profile';

function AccountPage() {

    return (
        <Profile />
    )
}
export default AccountPage;

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