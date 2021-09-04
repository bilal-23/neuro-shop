import classes from './hero-section.module.css';
import Button from '../ui/button';

function HeroSection(props) {
    const { pos } = props;
    console.log(pos)
    return (
        <section className={`${classes.hero} ${classes[pos]} `}>
            <div className={classes.hero_content}>
                <div className={classes.hero_content_heading}>
                    <h1>{props.heading}</h1>
                    {props.text && <p>{props.text}</p>}
                </div>
                <div className={classes.hero_content_cta}>
                    <Button>{props.btnText}</Button>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;