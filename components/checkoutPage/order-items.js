import classes from './order-items.module.css';

function OrderItems(props) {
    return (
        <div className={classes.item}>
            <div className={classes.item_name}>
                <img src={`./images/allproducts/${props.image}`} alt="" />
                <p>{props.name}</p>
            </div>
            <div className={classes.item_quantity}>
                <div className={classes.item_quantity_actions}>
                    <p>x {props.quantity}</p>
                </div>
            </div>
            <div className={classes.item_total}>
                <p>₹ {props.totalPrice}</p>
            </div>
        </div>
    )
}
export default OrderItems;