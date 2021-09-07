import classes from './header.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from 'next/link';
import Image from 'next/image';
function Header() {


    return (
        <header className={classes.header} style={
            {
                color: 'black',
                backgroundColor: 'white'
            }
        }>
            <div className={classes.logo}>
                <Link href="/"><Image src="/assets/BlackLogo.svg" width={120} height={30} alt="Logo" /></Link>
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