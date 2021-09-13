import classes from './profile.module.css';
import { signout } from "next-auth/client"
import { useRouter } from 'next/router';
function Profile() {
    const router = useRouter();

    async function logoutHandler() {
        const data = await signout({ redirect: false, callbackUrl: "/" })
        router.replace(data.url);
    }
    return (
        <section className={classes.profile}>
            <div className={classes.profile_nav}>
                <ul>
                    <li className={classes.active} onClick={() => setNavSelected('history')} >Purchase History</li>
                    <li onClick={logoutHandler}>Logout</li>
                </ul>
            </div>
            <div className={classes.profile_nav_content}>
                <h2>Purchase history</h2>
            </div>
        </section>
    )
}
export default Profile;