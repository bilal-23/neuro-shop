import classes from './header.module.css';
import Link from 'next/link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'next/image';
import { useSession } from 'next-auth/client';


function Header() {
    const [session, loading] = useSession();
    return (
        <header className={classes.header} style={{
            color: 'black',
            backgroundColor: 'white'
        }}>
            <div className={classes.logo}>
                <Link href="/"><Image src="/assets/BlackLogo.svg" width={120} height={30} alt="Logo" /></Link>
            </div>
            <div className={classes.right}>
                <ul>
                    <Link href="/products"><a><li>Shop</li> </a>
                    </Link>
                    <li>About</li>
                    <li>Subscription</li>
                    {!session && <Link href="/auth"><a>
                        <li>Sign in</li>
                    </a></Link>}
                    {session && <Link href="/profile"><a>
                        <li>Profile</li>
                    </a></Link>}
                    <Link href="/cart"><a>
                        <li>
                            <ShoppingCartIcon style={{ fontSize: 30 }} />
                        </li>
                    </a>
                    </Link>
                </ul>
            </div>
        </header >
    )
}
export default Header;

