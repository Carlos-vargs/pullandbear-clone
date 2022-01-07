import { Flex, Link } from '@chakra-ui/layout';
import NextLink from "next/link"

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
            <NextLink
                href={url}
                passHref
            >
                <Link   
                    userSelect="none"
                    textDecoration="none !important"
                    fontWeight="400"
                    letterSpacing="6px"
                    transform="rotate(90deg)"
                    textTransform="uppercase"
                    fontSize="64px"
                    _focus={{
                        boxShadow: "none"
                    }}
                >
                    {gender}
                </Link>
            </NextLink>
        </Flex>
    );
}

export default ClothingGenderCard;