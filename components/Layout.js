import dynamic from "next/dynamic";
const Menu = dynamic(() => import('@components/Menu'))
const Footer = dynamic(() => import('@components/Footer'))
const SearchBar = dynamic(() => import('@components/SearchBar'))
const SaleBackground = dynamic(() => import('@components/SaleBackground'))

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