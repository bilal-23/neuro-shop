import ProductDetail from "../../components/productDetails/product-detail";
import ErrorPage from "../../components/ui/error-page";
import { connectToDatabase } from '../../util/database';
import { useRouter } from 'next/router';
import Fallback from "../../components/ui/fallback";


function ProductDetailsPage(props) {
    const router = useRouter();

    if (router.isFallback) {
        return <Fallback />
    }
    const product = JSON.parse(props?.product)
    if (props.error) {
        return <ErrorPage />
    } else {
        return (
            <ProductDetail product={product} />

        )
    }
}
export default ProductDetailsPage;


export async function getStaticProps(context) {
    const { productId } = context.params;
    let client;
    //connecting to database
    try {
        client = await connectToDatabase();
        if (!client) {
            throw new Error("Cannot connect to database")
        }
    }
    catch (error) {
        client?.close();
        return {
            props: {
                error: error.message,
                product: null,
            },
            redirect: {
                destination: '/404',
                permanent: false,
            }
        }
    }
    //find the product with id same as give in query 
    try {
        const product = await client.db().collection('products').findOne({ productId: productId });
        client.close();
        if (!product) {
            throw new Error("Product not found")
        }
        return {
            props: {
                error: null,
                product: JSON.stringify(product),
            }, revalidate: 6000
        }
    }
    catch (error) {
        client.close();
        return {
            props: {
                error: error.message,
                product: null,
            },
            redirect: {
                destination: '/404',
                permanent: false,
            },

        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            { params: { productId: 'gum-peppermint' } },
            { params: { productId: 'mint-peppermint' } },
            { params: { productId: 'mint-ginger-chai' } }
        ],
        fallback: true,
    };
}
