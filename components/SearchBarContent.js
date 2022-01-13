import { CloseButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import LogoCenter from "@components/LogoCenter";
import SearchForm from "@components/SearchForm";

function SearchBarContent({ onClose, isOpen }) {
    return (
        <Drawer placement="top" onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody pt="110px" display="flex" justifyContent="center" >
                    <LogoCenter />
                    <CloseButton
                        size="lg"
                        top="30px"
                        right="50px"
                        title="close"
                        onClick={onClose}
                        position="absolute"
                    />
                    <SearchForm />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default SearchBarContent;