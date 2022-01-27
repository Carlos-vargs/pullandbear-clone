import { Flex } from "@chakra-ui/react";
import TextAndDivider from "@components/TextAndDivider";
import { nanoid } from "nanoid";

function CategoryContainer() {

    const clothes = [
        "trousers",
        "shirts",
        "jackets",
        "sweatshirts",
        "shoes",
    ]

    return (
        <Flex
            textTransform="uppercase"
            justifyContent="center"
            alignItems="center"
            gridRowGap="16px"
            flexWrap="wrap"
            py="40px"
        >
            {
                clothes.map((e, i) => <TextAndDivider
                    key={nanoid()}
                    fsize={['10px', '10px', '14px', '14px', '14px']}
                    lastItem={clothes.length - 1}
                    index={i}
                >{e}</TextAndDivider>)
            }
        </Flex>
    );
}

export default CategoryContainer;