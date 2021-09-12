import classes from './shipping_form.module.css';

function ShippingForm() {
    return (
        <form className={classes.form}>
            <div className={classes.input_subgroup}>
                <div className={classes.input_group}>
                    <input type="name" id="name" placeholder="First Name" />
                    <label htmlFor="name">First Name</label>
                </div>
                <div className={classes.input_group}>
                    <input type="name" id="name" placeholder="Last Name" />
                    <label htmlFor="name">Last Name</label>
                </div>
            </div>
            <div className={classes.input_group}>
                <input type="text" id="address" placeholder="Address" />
                <label htmlFor="address">Address</label>
            </div>
            <div className={classes.input_group}>
                <input type="text" id="city" placeholder="City" />
                <label htmlFor="city">City</label>
            </div>
            <div className={classes.input_subgroup}>
                <div className={classes.input_group}>
                    <input type="text" id="country" placeholder="Country" />
                    <label htmlFor="country">Country</label>
                </div>
                <div className={classes.input_group}>
                    <input type="text" id="state" placeholder="State" />
                    <label htmlFor="state">State</label>
                </div>
                <div className={classes.input_group}>
                    <input type="text" id="zip" placeholder="ZIP code" />
                    <label htmlFor="zip">ZIP code</label>
                </div>
            </div>
            <div className={classes.input_group}>
                <input type="num" id="phone" placeholder="Phone" />
                <label htmlFor="phone">Phone</label>
            </div>
        </form>
    )
}
export default ShippingForm;