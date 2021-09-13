import classes from './order-details.module.css';
import { useSelector } from 'react-redux';
import OrderItems from './order-items';
import DiscountCode from './discount-code';
import { useState } from 'react';

function OrderDetails() {
    const [discountApplied, setDiscountApplied] = useState(false);
    const [totalPrice, setTotalPrice] = useState();
    const order = useSelector(state => state.cart);
    console.log(order);
    function couponHandler(code) {
        if (!discountApplied) {
            if (code !== 'FREE100') {
                alert('Invalid Coupon Code');
                return;
            }
            else {
                setDiscountApplied(true);
                const price = Math.trunc(order.totalPrice - 0.99 * order.totalPrice);
                setTotalPrice(price);
            }
        } else if (discountApplied) {
            setDiscountApplied(false);
            setTotalPrice(order.totalPrice);
        }
    }
    return (
        <div className={classes.order}>
            <p>Items in cart</p>
            {order.products?.map(item => <OrderItems key={item.id} productId={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />)}
            <div className={classes.order_total}>
                <div className={classes.order_discount}>
                    <DiscountCode onApplyCoupon={couponHandler} discountApplied={discountApplied} removeDiscount={couponHandler} />
                </div>
                <div className={classes.order_total}>
                    <div>
                        <p>Subtotal</p>
                        <p>₹{order.totalPrice}</p>
                    </div>
                    <div>
                        <p>Discount</p>
                        <p>{discountApplied ? "99.9%" : "-"}</p>
                    </div>
                    <div>
                        <p>Shipping</p>
                        <p>Free Shipping</p>
                    </div>
                </div>
                <div className={classes.order_total_price}>
                    <p>Total</p>

                    <p>₹{totalPrice ? totalPrice : order.totalPrice}</p>
                </div>
            </div>

        </div>
    )
}
export default OrderDetails;