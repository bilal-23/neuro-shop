import classes from './hero-section.module.css';
import Button from '../ui/button';

function HeroSection() {
    return (
        <section className={`${classes.hero} `}>
            <div className={classes.hero_content}>
                <h1>Health in your pocket</h1>
                <p>Functional gum and mints to energize, calm and focus you in the moment.</p>
                <Button>Shop</Button>
            </div>
        </section>
    )
}
export default HeroSection;