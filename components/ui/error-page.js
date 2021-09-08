import classes from './error-page.module.css';
import Link from 'next/link';
import Image from 'next/image'
function ErrorPage() {
    return (
        <div className={classes.error}>
            <div className={classes.error_text}>
                <h1>Oops! We can&apos;t find that page.</h1>
                <p>The link you followed may be broken, or the page may have been removed.</p>
                <p>Go back to <Link href="/">homepage</Link></p>
            </div>
            <div className={classes.image}>
                <Image src="/assets/404.png" alt="error" width={400} height={400} />
            </div>
        </div>
    )
}
export default ErrorPage;