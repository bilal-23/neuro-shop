import Card from '../ui/card';
import classes from './shop-section.module.css'

function ShopSection() {
    return (
        <section className={classes.section}>
            <div className={classes.description}>
                <h3>We get the mental game.</h3>
                <p>That’s why we create products to help shift your mindset with ease and flow. Our functional gum and mints are shortcuts to the ideal state of mind, delivering just the right amount of what you need to energize, calm and focus your mind in the moment.</p>
            </div>
            <div className={classes.content}>
                <h3>Shop by function</h3>
                <p>Find the right products for any situation.</p>
                <div className={classes.cards}>
                    <Card cardId='card1' text='ENERGY & FOCUS' link="/products/collection/gum" />
                    <Card cardId='card2' text='CALM & CLARITY' link="/products/mint-ginger-chai" />
                    <Card cardId='card3' text='IDEAL STATE' link="/products/mint-peppermint-ginger-chai" />
                </div>
            </div>
        </section>
    )
}
export default ShopSection;