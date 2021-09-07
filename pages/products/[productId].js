import ProductDetail from "../../components/productDetails/product-detail";

function ProductDetailsPage(props) {
    return (
        <ProductDetail product={props.product} />
    )
}
export default ProductDetailsPage;


export async function getStaticProps(context) {
    const { productId } = context.params;
    const res = await fetch(`${process.env.URL}/api/product-details/${productId}`);
    const data = await res.json();
    return {
        props: {
            product: data.product
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
