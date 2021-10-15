import { signout } from "next-auth/client"
import { useRouter } from 'next/router';
import OrderItem from "./order-item";
import classes from './profile.module.css';

function Profile({ orders }) {
    const router = useRouter();

    async function logoutHandler() {
        signout({ redirect: true, callbackUrl: "/" })
    }
    return (
        <section className={classes.profile}>
            <div className={classes.profile_nav}>
                <ul>
                    <li className={classes.active} onClick={() => setNavSelected('history')} >Purchase History</li>
                    <li onClick={logoutHandler}>Logout</li>
                </ul>
            </div>
            <div className={classes.profile_nav_content}>
                <h2>Purchase history</h2>
                {orders.map(order => <OrderItem key={order.orderId} order={order} />)}
            </div>
        </section>
    )
}
export default Profile;