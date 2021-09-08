import classes from './cart-item.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

function CartItem(props) {
    const dispatch = useDispatch();

    function addQuantity() {
        const product = {
            id: props.productId,
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: props.quantity,
            id: props.productId,
            totalPrice: props.totalPrice
        }
        dispatch(cartActions.addProduct(product));
    }
    function removeQuantity() {
        const product = {
            id: props.productId,
            name: props.name,
            price: props.price,
            image: props.image,
            quantity: props.quantity,
            id: props.productId,
            totalPrice: props.totalPrice
        }
        dispatch(cartActions.removeProduct(product));
    }

    return (
        <>
            <div className={classes.item}>
                <div className={classes.item_name}>
                    <img src={`./images/allproducts/${props.image}`} alt="" />
                    <p>{props.name}</p>
                </div>
                <div className={classes.item_shipment}>
                    <p>One Time Purchase</p>
                </div>
                <div className={classes.item_quantity}>
                    <div className={classes.item_quantity_actions}>
                        <button onClick={() => removeQuantity()}>-</button>
                        <p>{props.quantity}</p>
                        <button onClick={() => addQuantity()}>+</button>
                    </div>
                </div>
                <div className={classes.item_total}>
                    <p>$ {props.totalPrice}</p>
                </div>
            </div>
        </>
    )
}
export default CartItem;