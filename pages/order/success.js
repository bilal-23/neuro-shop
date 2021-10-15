import Head from 'next/head';
import classes from './success.module.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '../../components/ui/button'
import Link from 'next/link';
function Success() {
    return (
        <>
            <Head>
                <title>Order Confirmed</title>
            </Head>
            <div className={classes.success}>
                <CheckCircleOutlineIcon className={classes.tick_icon} />
                <h3 className={classes.heading}>Thank you for placing your order with our store !</h3>
                <p className={classes.message}>We&#39;ll send a confirmation once your item is shipped. If you would like to check the status of the order&#40;s&#41; please press the link below.</p>
                <div className={classes.order_button}>
                    <Link href="/account">
                        <a>
                            <Button >Go to my orders</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Success;