import AllProducts from "../../../components/allProductsPage/all-products";
import Head from 'next/head';

function Gum() {
    return (
        <>
            <Head>
                <title>Energy & Focus</title>
            </Head>
            <AllProducts heading="Energy & Focus" subheading="Optimum energy that fits right into your pocket" allProducts={false} />
        </>
    )
}
export default Gum;