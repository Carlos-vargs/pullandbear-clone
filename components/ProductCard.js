import { Flex, Image } from "@chakra-ui/react";

function ProductCard({ data }) {


    const { title, price, image_url } = data

    return (
        <Flex
            letterSpacing=".4px"
            alignItems="center"
            direction="column"
            gridGap="12px"
        >
            <Image
                objectFit="cover"
                alt={title}
                w={['260px', '260px', '300px', '300px', '300px']}
                h={['340px', '340px', '454px', '454px', '454px']}
                src={image_url[0]}
            />
            <Flex as="span"
                fontSize="12px"
                color="#313131"
                overflow="hidden"
                className="line-clamp"
                textOverflow="ellipsis"
            >
                {title}
            </Flex>
            <Flex as="span"
                fontSize="12px"
                color="black"
                fontWeight="semibold"
                textTransform="uppercase"
            >
                {price.toFixed(2)}nio
            </Flex>
        </Flex>
    );
}

export default ProductCard;