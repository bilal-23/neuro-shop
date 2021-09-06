import classes from './hero-section.module.css';
import Button from '../ui/button';
import Link from 'next/link';

function HeroSection(props) {
    const { pos } = props;
    //pos determines whether it is top banner or the one above footer.
    return (
        <section className={`${classes.hero} ${classes[pos]} `}>
            <div className={classes.hero_content}>
                <div className={classes.hero_content_heading}>
                    <h1>{props.heading}</h1>
                    {props.text && <p>{props.text}</p>}
                </div>
                <div className={classes.hero_content_cta}>
                    <Link href="/products">
                        <a href="/products">
                            <Button>{props.btnText}</Button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;