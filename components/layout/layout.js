import Header from "./header";
import Footer from './footer';
function Layout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export default Layout;