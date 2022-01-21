import { Flex } from "@chakra-ui/react";
import TextAndDivider from "@components/TextAndDivider";
import { nanoid } from "nanoid";

const businessInfo = [
    "privacy policy",
    "purchase conditions",
    "cookie policy",
    "cookie preferences",
    "more fashion",
]

function FooterBusinessInfoContainer() {
    return (
        <Flex
            textTransform="capitalize"
            justifyContent="right"
            px={['0px', '0px', '44px', '44px', '44px']} py="20px"
        >
            {
                businessInfo.map((e, i) => <TextAndDivider
                    key={nanoid()}
                    color="#666666"
                    fsize={['10px', '10px', '12px', '12px', '12px']}
                    lastItem={businessInfo.length - 1}
                    index={i}
                >{e}</TextAndDivider>)
            }
        </Flex>
    );
}

export default FooterBusinessInfoContainer;