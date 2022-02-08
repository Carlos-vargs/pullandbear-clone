import dynamic from "next/dynamic";
import { Flex } from "@chakra-ui/react";
import LogoCenter from "@components/LogoCenter";

const ContainerProductForm = dynamic(() => import("@components/ContainerProductForm"));

function createProducts() {

    return (
        <Flex
            position="relative"
            alignItems="center"
            justifyContent="center"
            py={['80px', '130px', '140px', '140px', '140px']}
            wrap="wrap"
            px={['0px', '0px', '100px', '100px', '100px']}
        >
            <LogoCenter w={['200px', '250px', '250px', '250px', '250px']} />
            <ContainerProductForm />
        </Flex>
    );
}

export default createProducts;