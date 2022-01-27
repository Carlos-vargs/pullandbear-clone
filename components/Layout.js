import dynamic from "next/dynamic";
import LogoCenter from "@components/LogoCenter";
import { TopBarTheme } from "@providers/Context";
const Menu = dynamic(() => import('@components/Menu'))
const Footer = dynamic(() => import('@components/Footer'))
const SearchBar = dynamic(() => import('@components/SearchBar'))

function Layout({ children, theme = "black" }) {

    return (
        <TopBarTheme.Provider value={theme} >
            <Menu />
            <LogoCenter color={theme} />
            <SearchBar />
            {children}
            <Footer />
        </TopBarTheme.Provider>

    )
}

export default Layout;