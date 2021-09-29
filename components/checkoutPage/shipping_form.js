import { useRef, useState, useEffect } from 'react';
import AlertToaster from '../ui/toaster';
import classes from './shipping_form.module.css';


function ShippingForm(props) {
    const [formIsValid, setFormIsValid] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();
    const phoneRef = useRef();


    //unmount notification
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, [showAlert]);


    //shipping form handler
    function formSubmitHandler(e) {
        e.preventDefault();
        const enteredFirstName = firstNameRef.current.value.trim();
        const enteredLastName = lastNameRef.current.value.trim();
        const enteredAddress = addressRef.current.value.trim();
        const enteredCity = cityRef.current.value.trim();
        const enteredCountry = countryRef.current.value.trim();
        const enteredState = stateRef.current.value.trim();
        const enteredZipcode = zipRef.current.value.trim();
        const enteredPhone = phoneRef.current.value.trim();

        if (!enteredFirstName || !enteredLastName || !enteredAddress || !enteredCity || !enteredCountry || !enteredState || !enteredZipcode || !enteredPhone) {
            setFormIsValid(false);
            setErrorMessage('Invalid Inputs, please check again !');
            setShowAlert(true);
            return;
        }
        if (enteredPhone.length < 10 || enteredPhone.length > 13) {
            setFormIsValid(false);
            setErrorMessage('Invalid Phone Number, Phone Number must be greater than 10 digits and less than 13 digits')
            setShowAlert(true);
            return;
        }
        if (enteredZipcode.length !== 6) {
            setFormIsValid(false);
            setErrorMessage('Invalid Zip Code');
            setShowAlert(true);
            return;
        }
        const shippingDetails = {
            firstname: enteredFirstName,
            lastName: enteredLastName,
            address: enteredAddress,
            city: enteredCity,
            country: enteredCountry,
            state: enteredState,
            zipcode: enteredZipcode,
            phone: enteredPhone
        }
        props.onContinueToPayment(shippingDetails);
    }




    return (
        <> {showAlert &&
            <AlertToaster severity="warning" color="warning">
                {errorMessage}
            </AlertToaster>
        }
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.input_subgroup}>
                    <div className={classes.input_group}>
                        <input type="name" id="name" placeholder="First Name" required ref={firstNameRef} />
                        <label htmlFor="name">First Name</label>
                    </div>
                    <div className={classes.input_group}>
                        <input type="name" id="name" placeholder="Last Name" required ref={lastNameRef} />
                        <label htmlFor="name">Last Name</label>
                    </div>
                </div>
                <div className={classes.input_group}>
                    <input type="text" id="address" placeholder="Address" required ref={addressRef} />
                    <label htmlFor="address">Address</label>
                </div>
                <div className={classes.input_group}>
                    <input type="text" id="city" placeholder="City" required ref={cityRef} />
                    <label htmlFor="city">City</label>
                </div>
                <div className={classes.input_subgroup}>
                    <div className={classes.input_group}>
                        <input type="text" id="country" placeholder="Country" required value="India" disabled ref={countryRef} />
                    </div>
                    <div className={classes.input_group}>
                        <select name="states" placeholder="State" required ref={stateRef} >
                            <option value="Andaman and Nicobar Islands" >Andaman and Nicobar Islands</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi" defaultValue>Delhi</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Orissa">Orissa</option>
                            <option value="Pondicherry">Pondicherry</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttaranchal">Uttaranchal</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className={classes.input_group}>
                        <input type="text" id="zip" placeholder="ZIP code" required min="6" max="6" ref={zipRef} />
                        <label htmlFor="zip">ZIP code</label>
                    </div>
                </div>
                <div className={classes.input_group}>
                    <input type="num" id="phone" placeholder="Phone" min="9" max="12" ref={phoneRef} />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className={classes.order_action}>
                    <button>Continue to payment</button>
                </div>
            </form>
        </>
    )
}
export default ShippingForm;