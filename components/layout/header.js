import Link from 'next/link';
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useWindowDimensions from '../../hooks/use-windowDimension';
import MobileMenu from './mobile-menu';
import classes from './header.module.css';

function Header() {
    const [session, loading] = useSession();
    const dimension = useWindowDimensions();
    return (
        <>

            <header className={classes.header} style={{
                color: 'black',
                backgroundColor: 'white'
            }}>
                <div className={classes.logo}>
                    <Link href="/"><Image src="/assets/BlackLogo.svg" width={120} height={30} alt="Logo" /></Link>
                </div>
                <div className={classes.right}>
                    {dimension?.width < 600 && <MobileMenu />}
                    {dimension?.width > 600 && <ul>
                        <Link href="/products"><a><li>Shop</li> </a>
                        </Link>
                        <li>About</li>
                        <li>Subscription</li>
                        {!session && <Link href="/auth"><a>
                            <li>Sign in</li>
                        </a></Link>}
                        {session && <Link href="/account"><a>
                            <li>Account</li>
                        </a></Link>}
                        <Link href="/cart"><a>
                            <li>
                                <ShoppingCartIcon style={{ fontSize: 30 }} />
                            </li>
                        </a>
                        </Link>
                    </ul>}
                </div>
            </header >
        </>
    )
}
export default Header;

