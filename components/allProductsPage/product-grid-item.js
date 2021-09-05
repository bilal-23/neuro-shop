import ButtonSecondary from '../ui/Button-secondary'
import classes from './product-gird-item.module.css'
function ProductGridItem(props) {
    const { reverse, heading, text, cardId, image1, image2, productName1, productName2, flavour } = props;
    return (
        <div className={`${classes.item} ${reverse && classes['reverse']}`}>
            <div className={classes.item_images}>
                {image1 && <div className={classes.item_image}>
                    <h3>{productName1}</h3>
                    <img src={`./images/allproducts/${image1}`} alt="" />
                    <p>{flavour}</p>
                    <ButtonSecondary>Shop Now</ButtonSecondary>
                </div>}
                {image2 && <div className={classes.item_image}>
                    <h3>{productName2}</h3>
                    <img src={`./images/allproducts/${image2}`} alt="" />
                    <p>{flavour}</p>
                    <ButtonSecondary>Shop Now</ButtonSecondary>
                </div>}
            </div>
            <div className={`${classes.item_description} ${classes[cardId]}`}>
                <div className={classes.item_description_image}>
                    <img src={`./assets/${cardId}.png`} alt="" />
                </div>
                <div className={classes.item_description_heading}>
                    <h3>{heading}</h3>
                </div>
                <div className={classes.item_description_text}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default ProductGridItem