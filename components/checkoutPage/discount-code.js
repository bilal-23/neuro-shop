import { useRef } from 'react';
import formClasses from './shipping_form.module.css';
import classes from './discount-code.module.css';

function DiscountCode(props) {
    const inputRef = useRef();
    function applyCouponHandler() {
        const code = inputRef.current.value.trim();
        props.onApplyCoupon(code)
    }
    function removeDiscount() {
        props.removeDiscount();
    }
    return (
        <div className={`${formClasses.input_group} ${classes.input_group}`}>
            <input type="discount" id="discount" placeholder="Discount Code" ref={inputRef} disabled={props.discountApplied && true} />
            {!props.discountApplied && <button onClick={applyCouponHandler}>Apply</button>}
            {props.discountApplied && <button onClick={removeDiscount} className={classes.remove}>Remove Coupon</button>}
        </div>
    )
}
export default DiscountCode;