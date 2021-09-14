import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CartWrapper(props) {
    const cart = useSelector(state => state.cart);

    //save cart data to databse

    useEffect(() => {
        async function saveCartData() {
            const res = await fetch('/api/cart/cartItems')
            const data = await res.json();
            console.log(data, res);
        }
        saveCartData().catch((err) => console.log(err));
    }, [cart]);


    return (
        <>
            {props.children}
        </>
    )
}
export default CartWrapper;