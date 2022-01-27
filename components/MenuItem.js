import NextChakraLink from "@components/NextChakraLink";

function MenuItem({ data }) {

    const { title, url, offer, onClose } = data

    return (
        <NextChakraLink
            fontSize={['26px', '26px', '30px', '30px', '30px']}
            color={offer ? "red" : "black"}
            fontWeight="semibold"
            letterSpacing="-1px"
            pageUrl={url}
            onClick={onClose}
            _focus={{
                boxShadow: "none"
            }}
            textDecoration="none !important"
        >
            {title}
        </NextChakraLink>
    );
}

export default MenuItem;