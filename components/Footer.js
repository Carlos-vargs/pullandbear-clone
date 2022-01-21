import { Flex } from "@chakra-ui/react";
import FooterCategoryContainer from "@components/FooterCategoryContainer";
import FooterInfoServicesContainer from "@components/FooterInfoServicesContainer";
import FooterBusinessInfoContainer from "@components/FooterBusinessInfoContainer";

function Footer() {
    return (
        <Flex direction="column" cursor="pointer" >
            <FooterInfoServicesContainer />  
            <FooterBusinessInfoContainer />   
        </Flex>
    );
}

export default Footer;