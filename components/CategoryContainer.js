import TextAndDivider from "@components/TextAndDivider";
import NextChakraLink from "@components/NextChakraLink";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

function CategoryContainer() {

    const route = useRouter()
    const { gender } = route.query

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
                >
                    <NextChakraLink _focus={{ boxShadow: "none" }} pageUrl={`/en/${gender}/${e}`} >
                        {e}
                    </NextChakraLink>
                </TextAndDivider>)
            }
        </Flex>
    );
}

export default CategoryContainer;