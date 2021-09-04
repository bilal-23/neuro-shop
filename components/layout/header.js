import classes from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState, useEffect } from 'react';
function Header() {
    const [transparent, setTransparent] = useState(true);

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
        <header className={classes.header} style={{ backgroundColor: !transparent && 'white', color: !transparent && 'black' }}>
            <div className={classes.logo}>
                {!transparent && <img src="./assets/BlackLogo.svg" alt="logo" />}
                {transparent && <img src="./assets/WhiteLogo.svg" alt="logo" />}
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
        </header>
    )
}
export default Header;