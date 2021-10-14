import classes from './order-item.module.css';
import NumberFormat from "react-number-format";

function OrderItem(props) {
    const { amount, orderId, images } = props.order;
    const date = new Date(props.order.timestamp);
    const transformedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`


    return (
        <div className={classes.order}>
            <div className={classes.order_details}>
                <div>
                    <p className={classes.order_title}>Order Placed</p>
                    <p className={classes.order_date}>{transformedDate}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>
                        <NumberFormat
                            thousandsGroupStyle="lakh"
                            value={amount}
                            prefix="₹"
                            decimalSeparator="."
                            displayType="text"
                            type="text"
                            thousandSeparator={true}
                            allowNegative={true}
                            decimalScale={2}
                            allowLeadingZeros={false} />
                    </p>
                </div>

                <p className={classes.order_id}>{orderId}</p>
                <p className={classes.order_quantity}>{images.length}</p>
            </div>
            <div className={classes.order_images}>
                {images.map((img, i) => <img src={img} alt="orders" key={i} />)}
            </div>
        </div>
    )
}

export default OrderItem;