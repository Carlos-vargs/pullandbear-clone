import { Flex } from '@chakra-ui/layout';
import NextChakraLink from "@components/NextChakraLink";

function ClothingGenderCard({ data }) {

    const { image, url, gender } = data

    return (
        <Flex
            w="50%"
            bgImg={`url(${image})`}
            alignItems="center"
            justifyContent="center"
            bgSize="cover"
            bgPosition="top"
        >
            <NextChakraLink
                pageUrl={url}
                userSelect="none"
                fontWeight="400"
                letterSpacing="6px"
                transform="rotate(90deg)"
                textTransform="uppercase"
                fontSize="64px"
                _focus={{
                    boxShadow: "none"
                }}
                textDecoration="none !important"
            >
                {gender}
            </NextChakraLink>
        </Flex>
    );
}

export default ClothingGenderCard;