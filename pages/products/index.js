import AllProducts from '../../components/allProductsPage/all-products';
import Head from 'next/head';

function AllProductsPage() {

    return (
        <>
            <Head>
                <title>All Products</title>
            </Head>
            <AllProducts heading="Shop All" subheading="Feel your best quickly and conveniently." allProducts={true} />
        </>
    )
}
export default AllProductsPage;