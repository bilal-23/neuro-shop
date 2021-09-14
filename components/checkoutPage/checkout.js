import classes from './checkout.module.css';
import OrderDetails from './order-details';
import ShippingForm from './shipping_form';
import Spinner from '../ui/spinner';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Checkout() {
    const cartProduct = useSelector(state => state.cart.products);
    const [cartIsEmpty, setCartIsEmpty] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (cartProduct.length > 0) {
            setCartIsEmpty(false);
        }
        if (cartProduct.length === 0) {
            router.replace('/cart')
        }

    }, [cartProduct.length, router])

    function orderConfirmHandler(shippingDetails) {
        alert('Service temporarily unavailable');
    }

    if (cartIsEmpty) {
        return (<section className={classes.checkout}>
            <Spinner />
        </section>)
    }

    return (
        <section className={classes.checkout}>
            <div className={classes.checkout_left}>
                <p>Shipping Details</p>
                <ShippingForm onContinueToPayment={orderConfirmHandler} />
            </div>
            <div className={classes.checkout_right}>
                <OrderDetails />
            </div>

        </section>
    )
}
export default Checkout;