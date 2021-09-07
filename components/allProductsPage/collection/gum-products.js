import classes from './gum-product.module.css';
import ProductGridItem from '../product-grid-item';

function GumProducts() {
    return (
        <div className={classes.productsgrid}>
            <ProductGridItem
                heading="Energy & Focus."
                text="Specially formulated with natural caffeine, L-theanine and B-vitamins to sustain the mental endurance necessary to maintain your focus.*"
                cardId="card1"
                image1="gum-peppermint.png"
                image2="mint-peppermint.png"
                productName1="Gum"
                productName2="Mint"
                flavour="Peppermint"
                link1="gum-peppermint"
                link2="mint-peppermint"
                reverse={false} />
            <ProductGridItem
                heading="Cinnamon"
                text="An herbal cinnamon blend highlighted with a pinch of chai, our Energy & Focus Cinnamon gum and mints spice up your life and keep you feeling bold."
                cardId="card4"
                image1="gum-peppermint.png"
                image2="mint-peppermint.png"
                productName1="Mints"
                productName1="GUM"
                flavour="Cinnamon"
                link1="mint-ginger-chai"
                reverse={true} />
            <ProductGridItem
                heading="The Ideal State"
                text="Balance the ups and downs of your ambition with a combo pack of Energy & Focus and Calm & Clarity."
                cardId="card3"
                image1="both.png"
                productName1="MINTS"
                flavour="Peppermint & Ginger Chai"
                link1="mint-peppermint-ginger-chai"
                reverse={false} />
        </div>
    )
}
export default GumProducts;