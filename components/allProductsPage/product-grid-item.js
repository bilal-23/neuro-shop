import Link from 'next/link';
import Image from 'next/image';
import ButtonSecondary from '../ui/Button-secondary'
import classes from './product-gird-item.module.css'

function ProductGridItem(props) {
    const { reverse, heading, text, cardId, image1, image2, productName1, productName2, flavour, link1, link2 } = props;
    return (
        <div className={`${classes.item} ${reverse && classes['reverse']}`}>
            <div className={classes.item_images}>
                {image1 && <div className={classes.item_image}>
                    <h3>{productName1}</h3>
                    <Image src={`/images/allproducts/${image1}`} alt={heading} width={150}
                        height={200} />
                    <p>{flavour}</p>
                    <Link href={`/products/${link1}`}>
                        <a><ButtonSecondary>Shop Now</ButtonSecondary></a>
                    </Link>
                </div>}
                {image2 && <div className={classes.item_image}>
                    <h3>{productName2}</h3>
                    <Image src={`/images/allproducts/${image2}`} alt={heading} width={150}
                        height={200} />
                    <p>{flavour}</p>
                    <Link href={`/products/${link2}`}>
                        <a>
                            <ButtonSecondary link={`/products/${link1}`}>Shop Now</ButtonSecondary>
                        </a>
                    </Link>
                </div>}
            </div>
            <div className={`${classes.item_description} ${classes[cardId]}`}>
                <div className={classes.item_description_image}>
                    <Image src={`/assets/${cardId}.png`} alt={heading} width={cardId === 'card3' ? 100 : 50} height={50} />
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