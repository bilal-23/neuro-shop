import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CartItem from './cart-item';
import AlertToaster from '../ui/toaster';
import ButtonSecondary from '../ui/Button-secondary';
import Button from '../ui/button';
import classes from './cart.module.css';


function Cart() {
    const [showAlert, setShowAlert] = useState(false);
    const cart = useSelector(state => state.cart);
    const cartItems = cart.products;
    const totalPrice = cart.totalPrice;
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 800);

        return () => {
            clearTimeout(timeout);
        }
    }, [showAlert]);

    async function checkoutHandler() {
        const session = await getSession();
        if (!session) {
            setShowAlert(true);
            return;
        } else {
            router.push('/checkout');
            return;
        }
    }

    return (
        <>
            {showAlert &&
                <AlertToaster severity="warning" color="warning">
                    Sign In To Continue
                </AlertToaster>
            }

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
                            <Button tall={true} onClick={checkoutHandler}>Checkout</Button>
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
        </>
    )
}
export default Cart;