import classes from './all-products.module.css'
import ProductsGrid from './products-grid';
function AllProducts(props) {
    return (
        <section className={classes.section}>
            <div className={classes.section_heading}>
                <h1>{props.heading}</h1>
                <p>{props.subheading}</p>
            </div>
            <div className={classes.product_grid}>
                <ProductsGrid allProducts={props.allProducts} />
            </div>
        </section>
    )
}
export default AllProducts;