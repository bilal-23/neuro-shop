import ProductGridItem from './product-grid-item';
import classes from './products-grid.module.css';

function ProductsGrid(props) {
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
            {props.allProducts && <ProductGridItem
                heading="Calm & Clarity"
                text="Expertly developed with GABA, vitamin D3, and L-theanine to optimize composure and clarity of mind.*"
                cardId="card2"
                image1="ginger-chai.png"
                productName1="Mints"
                flavour="Ginger Chai"
                link1="mint-ginger-chai"
                reverse={true} />}
            {!props.allProducts && < ProductGridItem
                heading="Cinnamon"
                text="An herbal cinnamon blend highlighted with a pinch of chai, our Energy & Focus Cinnamon gum and mints spice up your life and keep you feeling bold."
                cardId="card4"
                image1="mint-cinnamon.png"
                image2="gum-cinnamon.png"
                productName1="Mints"
                productName2="GUM"
                flavour="Cinnamon"
                link1="mint-cinnamon"
                link2="gum-cinnamon"
                reverse={true} />}
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
export default ProductsGrid;