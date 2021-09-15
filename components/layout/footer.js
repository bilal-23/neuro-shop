import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FooterForm from './footer-form';
import classes from './footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_content}>
                <div className={classes.left}>
                    <div className={classes.address}>
                        <Image src="/assets/WhiteLogo.svg" width={120} height={30} alt="neuro" />
                        {/* <img src="../assets/WhiteLogo.svg" alt="logo" /> */}
                        <address>
                            <span>
                                Los Angeles, CA 90013
                            </span>
                            <span>
                                1.855.638.7646
                            </span>
                            <span>
                                hello@getneuro.com
                            </span>
                        </address>
                    </div>
                    <div className={classes.footer_links}>
                        <p>Explore</p>
                        <ul>
                            <li>Wholesale</li>
                            <li>FAQs</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Store Locator</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.right}>
                    <FooterForm />
                    <div className={classes.social}>
                        <a href="#">
                            <FacebookIcon className={classes.social_icon} style={{ fontSize: 30 }} />
                        </a>
                        <a href="#">
                            <InstagramIcon className={classes.social_icon} style={{ fontSize: 30 }} />
                        </a>
                        <a href="#">
                            <TwitterIcon className={classes.social_icon} style={{ fontSize: 30 }} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={classes.footer_extra_links}>
                <ul>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Purchase Policy</li>
                    <li> &#169;2021 Neuro. No rights reserved</li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;