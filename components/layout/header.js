import { useRouter } from 'next/router';
import classes from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState, useEffect } from 'react';
import Link from 'next/link';
function Header() {
    const [transparent, setTransparent] = useState(true);
    const router = useRouter();
    const isHomePage = router.pathname === '/'

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setTransparent(false);
            }
            if (window.scrollY < 70) {
                setTransparent(true);
            }
        })
    }, []);

    return (
        <header className={classes.header} style={
            {
                backgroundColor: isHomePage && !transparent && 'white',
                color: isHomePage && !transparent && 'black',
                backgroundColor: !isHomePage && 'white'
            }
        }>
            <div className={classes.logo}>
                {isHomePage && !transparent && <Link href="/"><img src="./assets/BlackLogo.svg" alt="logo" /></Link>}
                {isHomePage && transparent && <Link href="/"><img src="./assets/WhiteLogo.svg" alt="logo" /></Link>}
                {!isHomePage && <Link href="/"><img src="../assets/BlackLogo.svg" alt="logo" /></Link>}
            </div>
            <div className={classes.right}>
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Subscription</li>
                    <li>Sign in</li>
                    <li>
                        <ShoppingCartIcon style={{ fontSize: 30 }} />
                    </li>
                </ul>
            </div>
        </header >
    )
}
export default Header;