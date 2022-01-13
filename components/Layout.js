import Footer from "@components/Footer";
import Menu from "@components/Menu";
import SaleBackground from "@components/SaleBackground";
import SearchBar from "@components/SearchBar";

function Layout({ children }) {
    return (
        <>
            <Menu />
            <SearchBar />
            <SaleBackground />
            {children}
            <Footer />
        </>
    )
}

export default Layout;