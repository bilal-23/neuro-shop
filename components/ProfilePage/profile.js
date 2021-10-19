import { signout } from "next-auth/client";
import OrderItem from "./order-item";
import { useDispatch } from "react-redux";
import { cartActions } from '../../store/cart-slice';
import classes from './profile.module.css';
import { useSession } from 'next-auth/client';

function Profile({ orders }) {
    const dispatch = useDispatch();

    async function logoutHandler() {
        dispatch(cartActions.resetCart());
        const data = await signout({ redirect: false, callbackUrl: "/" });
        if (data) {
            location.replace('/');
        }
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
                {orders.map((order, index) => <OrderItem key={order.orderId + index} order={order} />)}
            </div>
        </section>
    )
}
export default Profile;