import { useRouter } from 'next/router';
import classes from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                {isHomePage && !transparent && <Link href="/"><Image src="/assets/BlackLogo.svg" width={120} height={30} alt="Logo" /></Link>}
                {isHomePage && transparent && <Link href="/"><Image src="/assets/WhiteLogo.svg" width={120} height={30} alt="Logo" /></Link>}
                {!isHomePage && <Link href="/"><Image src="/assets/BlackLogo.svg" width={120} height={30} alt="Logo" /></Link>}
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