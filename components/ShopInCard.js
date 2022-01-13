import { Flex, Heading } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";

function ShopInCard({ image, bgPosition = "top" }) {
    return (
        <Flex
            w="full"
            h="668px"
            pb="100px"
            bgSize="cover"
            color="white"
            gridGap="24px"
            bgPosition={bgPosition}
            direction="column"
            position="relative"
            bgRepeat="no-repeat"
            alignItems="center"
            justifyContent="flex-end"
            bgImg={`url(${image})`}
        >
            <Heading textTransform="uppercase">
                new in
            </Heading>
            <NextChakraLink
                pageUrl={"/#"}
                py="8px"
                px="18px"
                fontSize="12px"
                border="1px solid"
                borderRadius="10px"
                fontWeight="semibold"
                textTransform="uppercase"
                transition="all .2s ease-out"
                _hover={{
                    bgColor: "white",
                    color: "gray.800",
                    borderColor: "white",
                }}

            >
                shop
            </NextChakraLink>
        </Flex>
    );
}

export default ShopInCard;