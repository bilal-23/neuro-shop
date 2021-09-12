import classes from './checkout.module.css';
import ShippingForm from './shipping_form';

function Checkout() {
    return (
        <section className={classes.checkout}>
            <div className={classes.checkout_left}>
                <p>Shipping Details</p>
                <ShippingForm />
            </div>
            <div className={classes.checkout_right}>

            </div>
        </section>
    )
}
export default Checkout;