import CartItem from './cart-item';
import classes from './cart.module.css';
import { useSelector } from 'react-redux';
import ButtonSecondary from '../ui/Button-secondary';
import Button from '../ui/button';
import Link from 'next/link';

function Cart() {
    const cart = useSelector(state => state.cart);
    const cartItems = cart.products;
    const totalPrice = cart.totalPrice;
    console.log(cart);
    return (
        <section className={classes.cart}>
            <div className={classes.cart_heading}>
                <h3>Shopping Bag</h3>
            </div>
            <div className={classes.cart_products}>
                <div className={classes.cart_titles}>
                    <p>Product</p>
                    <p>Shipment Type</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                {totalPrice !== 0 && <>
                    <div className={classes.cart_items}>
                        {cartItems?.map(item => <CartItem key={item.id} productId={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />)}
                    </div>
                    <div className={classes.cart_total}>
                        <p>Subtotal <span>₹{totalPrice}</span></p>
                        <p>Taxes and shipping calculated at checkout</p>
                    </div>
                    <div className={classes.cart_actions}>
                        <Link href="/checkout"><a><Button tall={true}>Checkout</Button></a></Link>
                    </div>
                </>
                }
                {totalPrice === 0 && <>
                    <div className={classes.cart_empty}>
                        <p>Looks like your shopping bag is empty.</p>
                        <p>Start adding items!</p>
                    </div>
                    <div className={classes.cart_empty_actions}>
                        <Link href="/products"><a><ButtonSecondary tall={true}>Continue shopping</ButtonSecondary></a></Link>
                    </div> </>
                }

            </div>
        </section>
    )
}
export default Cart;