import { getSession } from 'next-auth/client';
import Profile from '../components/ProfilePage/profile';
import { connectToDatabase } from '../util/database';

function AccountPage(props) {
    const purchaseHistory = JSON.parse(props.orders);

    return (
        <Profile orders={purchaseHistory} />
    )
}
export default AccountPage;



export async function getServerSideProps(context) {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await getSession({ req: context.req })
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    let client;
    let orders;
    try {
        client = await connectToDatabase();
        if (!client) throw new Error('Database Connection Failed');
    }
    catch (error) {
        client?.close();
        return {
            props: { error: error.message }
        }
    }

    try {
        const db = client.db();
        orders = await db.collection('orders').find({ email: session.user.email }).sort({ timestamp: -1 }).toArray();
        client.close();
        return {
            props: { orders: JSON.stringify(orders) },
        }
    }
    catch (error) {
        client.close();
        return {
            props: {
                error: error.message
            }
        }
    }




}