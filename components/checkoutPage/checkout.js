import classes from './checkout.module.css';
import OrderDetails from './order-details';
import ShippingForm from './shipping_form';

function Checkout() {

    function formSubmitHandler() {

    }
    return (
        <section className={classes.checkout}>
            <div className={classes.checkout_left}>
                <p>Shipping Details</p>
                <ShippingForm />
            </div>
            <div className={classes.checkout_right}>
                <OrderDetails />
            </div>

        </section>
    )
}
export default Checkout;