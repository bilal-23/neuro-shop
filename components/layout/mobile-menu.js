import { useState } from 'react';
import { useRouter } from 'next/router';
import { signout, useSession } from 'next-auth/client';
import Link from 'next/link';
import classes from './mobile-menu.module.css';

function MobileMenu() {
    const [session, loading] = useSession();
    const [active, setActive] = useState(false);
    const router = useRouter();
    async function logoutHandler() {
        setActive(false);
        const data = await signout({ redirect: false, callbackUrl: "/" })
        router.replace('/');
    }
    return (
        <nav className={`${classes.nav} ${active && classes['active']}`}>
            <div className={`${classes.nav_hamburger} ${active && classes['active']}`} onClick={() => setActive(prev => !prev)}>
                <div className={classes.bar}></div>
            </div>
            {active && <div className={classes.menu}>
                <div className={classes.nav_list}>
                    <ul>
                        <li onClick={() => setActive(prev => !prev)}>  <Link href="/products">Shop All</Link></li>
                        {session && <li onClick={() => setActive(prev => !prev)}><Link href="/account">Account</Link></li>}
                        <li onClick={() => setActive(prev => !prev)}><Link href="/cart">Cart</Link></li>
                        <li onClick={() => setActive(prev => !prev)}> <Link href="/">About</Link></li>
                        {!session && <li onClick={() => setActive(prev => !prev)}><Link href="/auth">Sign in</Link></li>}
                        {session && <li onClick={logoutHandler}>Sign Out</li>}
                    </ul>
                </div>
                <div className={classes.footer}>
                    <span>NEURO</span>
                </div>
            </div>}
        </nav>
    )
}
export default MobileMenu;