import dynamic from "next/dynamic";
import { createContext } from "react";
import LogoCenter from "@components/LogoCenter";
const Menu = dynamic(() => import('@components/Menu'))
const Footer = dynamic(() => import('@components/Footer'))
const SearchBar = dynamic(() => import('@components/SearchBar'))

export const TopBarTheme = createContext();

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