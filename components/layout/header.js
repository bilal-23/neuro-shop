import classes from './header.module.css';
function Header() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="./assets/logo.svg" alt="logo" />
            </div>
            <div className={classes.right}>
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Subscription</li>
                    <li>Sign in</li>
                    <li>
                        <img src="./assets/cart.svg" alt="cart" className={classes.cart_icon} />
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;