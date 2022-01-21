import { Flex, Heading } from "@chakra-ui/react";
import NextChakraLink from "@components/NextChakraLink";

function ShopInCard({ config }) {

    const { image, position, url } = config

    return (
        <Flex
            w="full"
            h="668px"
            pb="100px"
            color="white"
            bgSize="cover"
            gridGap="24px"
            direction="column"
            position="relative"
            alignItems="center"
            bgRepeat="no-repeat"
            bgPosition={position}
            bgImg={`url(${image})`}
            justifyContent="flex-end"
        >
            <Heading textTransform="uppercase">new in</Heading>
            <NextChakraLink
                pageUrl={url}
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