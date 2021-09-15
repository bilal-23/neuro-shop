import { useEffect, useState } from 'react';
import { useDispatch, } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import StarIcon from '@material-ui/icons/Star';
import CheckIcon from '@material-ui/icons/Check';
import Button from '../ui/button';
import classes from './product-detail.module.css';
import SkeletonImage from '../ui/image-skeleton';
import AlertToaster from '../ui/toaster';

function ProductDetail(props) {
    const [showAlert, setShowAlert] = useState(false);
    const dispatch = useDispatch();
    const { productId, description, flavor, heading, image1, price, size, star, subheading, name, cartImage } = props.product;


    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowAlert(false);
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }, [showAlert]);


    function addToCartHandler() {
        setShowAlert(true);
        const productPrice = +price;
        const product = {
            name: name,
            price: productPrice,
            image: cartImage,
            quantity: 1,
            id: productId
        }
        dispatch(cartActions.addProduct(product));
    }

    return (
        <>
            {showAlert &&
                <AlertToaster severity="success" color="info">
                    Item added to cart
                </AlertToaster>
            }
            <section className={`${classes.section} ${classes[productId]}`}>
                <div className={classes.product_image}>
                    <SkeletonImage height={430} width={430} src={`/images/allproducts/${image1}`} layout="intrinsic" />
                </div>
                <div className={classes.product_detail}>
                    <div className={classes.product_detail_heading}>
                        <p className={classes.custom_color}>{heading}</p>
                        <p>{subheading}</p>
                        <div className={`${classes.product_detail_rating}`}>
                            <p>{<StarIcon style={{ fontSize: 20 }} />}</p>
                            <p>{<StarIcon style={{ fontSize: 20 }} />}</p>
                            <p>{<StarIcon style={{ fontSize: 20 }} />}</p>
                            <p>{<StarIcon style={{ fontSize: 20 }} />}</p>
                            <span>{star}</span>
                        </div>
                        <div className={classes.product_detail_text}>
                            <p className={`${classes.product_detail_about}`}>Vegan | Aspartame-Free | Sugar-Free | Gluten-Free</p>
                            <p className={classes.product_detail_description}>{description}</p>
                            <p className={`${classes.product_detail_flavor}`}>Flavor: <span >{flavor}</span></p>
                            {size && < p className={classes.product_detail_size}>Size: <span>{size}</span></p>}
                        </div>
                    </div>
                    <div className={classes.product_detail_features}>
                        <div className={classes.product_detail_feature}>
                            <CheckIcon style={{ fontSize: 20 }} />
                            <div className={classes.product_detail_feature_text}>
                                <p>All Natural Flavors</p>
                                <p>Gluten-Free, Sugar-Free, Aspartame-Free, and Vegan.</p>
                            </div>
                        </div>
                        <div className={classes.product_detail_feature}>
                            <CheckIcon style={{ fontSize: 20 }} />
                            <div className={classes.product_detail_feature_text}>
                                <p>100% Happiness Guarantee</p>
                                <p>If you don’t love it, it’s on us.</p>
                            </div>
                        </div>
                        <div className={classes.product_detail_feature}>
                            <CheckIcon style={{ fontSize: 20 }} />
                            <div className={classes.product_detail_feature_text}>
                                <p>Fast Shipping</p>
                                <p>Free shipping over ₹350. Subscription shipping always free.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.product_buy}>
                        {price === "Coming Soon" && <Button background="black" disable={true} onClick={addToCartHandler}>{price}</Button>}
                        {price !== "Coming Soon" && <Button background="black" onClick={addToCartHandler}>Add to bag - ₹{price}</Button>}
                    </div>
                </div>
            </section >
        </>
    )
}
export default ProductDetail;