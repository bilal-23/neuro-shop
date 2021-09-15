import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import OrderDetails from './order-details';
import ShippingForm from './shipping_form';
import Spinner from '../ui/spinner';
import classes from './checkout.module.css';
import AlertToaster from '../ui/toaster';

function Checkout() {
    const cartProduct = useSelector(state => state.cart.products);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [cartIsEmpty, setCartIsEmpty] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [showAlert]);


    useEffect(() => {
        if (cartProduct.length > 0) {
            setCartIsEmpty(false);
        }
        if (cartProduct.length === 0) {
            router.replace('/cart')
        }

    }, [cartProduct.length, router])

    function orderConfirmHandler(shippingDetails) {
        setErrorMessage('Payment service temporarily unavailable');
        setShowAlert(true);
    }

    if (cartIsEmpty) {
        return (<section className={classes.checkout}>
            <Spinner />
        </section>)
    }

    return (
        <>{showAlert &&
            <AlertToaster severity="error" color="error">
                {errorMessage}
            </AlertToaster>
        }
            <section className={classes.checkout}>
                <div className={classes.checkout_left}>
                    <p>Shipping Details</p>
                    <ShippingForm onContinueToPayment={orderConfirmHandler} />
                </div>
                <div className={classes.checkout_right}>
                    <OrderDetails />
                </div>

            </section>
        </>
    )
}
export default Checkout;