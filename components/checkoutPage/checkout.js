import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { useSession } from 'next-auth/client';
import axios from 'axios';
import OrderDetails from './order-details';
import ShippingForm from './shipping_form';
import Spinner from '../ui/spinner';
import AlertToaster from '../ui/toaster';
import classes from './checkout.module.css';


const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const [session] = useSession();
    const cartProduct = useSelector(state => state.cart.products);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [cartIsEmpty, setCartIsEmpty] = useState(true);
    const router = useRouter();

    //unmount notification 
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [showAlert]);


    //Check whether cart is empty, if yes redirect to cart section
    useEffect(() => {
        if (cartProduct.length > 0) {
            setCartIsEmpty(false);
        }
        if (cartProduct.length === 0) {
            router.replace('/cart')
        }

    }, [cartProduct.length, router])

    //Proceed to payment function
    function orderConfirmHandler(shippingDetails) {
        createCheckoutSession();
    }

    console.log(cartProduct);

    //Stripe Checkout Session Generator
    async function createCheckoutSession() {
        const stripe = await stripePromise;


        //call the backend to create checkout session
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: cartProduct,
            email: session?.user?.email
        });

        //Redirect user to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        });

        if (result.error) {
            alert(result?.error?.message)
        }
    }


    //Cart===Empty Show Spinner
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