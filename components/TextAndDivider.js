import { Text } from "@chakra-ui/react";

function TextAndDivider({ index, lastItem, color, fsize = "14px", children }) {

    return (
        <Text
            px="10px"
            as="span"
            color={color}
            fontSize={fsize}
            _hover={{
                color: "black"
            }}
            textAlign="center"
            fontWeight="semibold"
            borderRight="1px solid"
            transition="color .2s ease-in"
            borderRightColor={index === lastItem ? "transparent" : "gray"}
        >
            {children}
        </Text>
    );
}

export default TextAndDivider;