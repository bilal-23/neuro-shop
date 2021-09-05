import classes from './all-products.module.css'
import ProductsGrid from './products-grid';
function AllProducts() {
    return (
        <section className={classes.section}>
            <div className={classes.section_heading}>
                <h1>Shop All</h1>
                <p>Feel your best quickly and conveniently.</p>
            </div>
            <div className={classes.product_grid}>
                <ProductsGrid />
            </div>
        </section>
    )
}
export default AllProducts;