import Head from 'next/head';
import classes from './error.module.css';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '../../components/ui/button'
import Link from 'next/link';
function Success() {
    return (
        <>
            <Head>
                <title>Order Confirmed</title>
            </Head>
            <div className={classes.error}>
                <CancelIcon className={classes.cancel_icon} />
                <h3 className={classes.heading}>Sorry, Your order wasn&#39;t placed successfully !</h3>
                <p className={classes.message}>Something went wrong during processing the payment, please try again.</p>
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