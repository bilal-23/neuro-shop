import classes from './error-page.module.css';
import Link from 'next/link';
function ErrorPage(props) {
    return (
        <div className={classes.error}>
            <div className={classes.error_text}>
                <h1>Oops! We can't find that page.</h1>
                <p>The link you followed may be broken, or the page may have been removed.</p>
                <p>Go back to <Link href="/">homepage</Link></p>
            </div>
            <img src="../assets/404.png" alt="" />
        </div>
    )
}
export default ErrorPage;