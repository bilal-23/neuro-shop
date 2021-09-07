import ProductDetail from "../../components/productDetails/product-detail";
import { connectToDatabase } from '../../util/database';
function ProductDetailsPage(props) {
    const product = JSON.parse(props.product)
    return (
        <ProductDetail product={product} />
    )
}
export default ProductDetailsPage;


export async function getStaticProps(context) {
    const { productId } = context.params;
    let client;
    //connecting to database
    try {
        client = await connectToDatabase();
    }
    catch (error) {
        client.close();
        return {
            props: {
                error: 'Cannot connect to database',
                product: null,
            }
        }
    }
    //find the product with id same as give in query 
    try {
        const product = await client.db().collection('products').findOne({ productId: productId });
        console.log(product)
        client.close();
        return {
            props: {
                error: null,
                product: JSON.stringify(product),
            }
        }
    }
    catch (err) {
        client.close();
        return {
            props: {
                error: 'Product not found',
                product: null,
            }
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { productId: 'gum-peppermint' } },
            { params: { productId: 'mint-peppermint' } },
            { params: { productId: 'mint-ginger-chai' } },
            { params: { productId: 'mint-peppermint-ginger-chai' } }
        ],
        fallback: false,
    };
}
