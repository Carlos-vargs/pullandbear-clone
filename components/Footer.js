import { Flex } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import TextAndDivider from "@components/TextAndDivider";
import FooterInfoServices from "@components/FooterInfoServices";
import android from '@images/download-android.png';
import ios from '@images/download-ios.png';
import FooterNewsletterContainer from "@components/FooterNewsletterContainer";

const business = [
    "contact",
    "about us",
    "store locator",
    "franchise",
    "work with us",
]

const businessInfo = [
    "privacy policy",
    "purchase conditions",
    "cookie policy",
    "cookie preferences",
    "more fashion",
]

const customerService = [
    "chat",
    "contact",
]

const clothes = [
    "trousers",
    "shirts",
    "jackets",
    "sweatshirts",
    "shoes",
]

const footerInfo = [
    {
        title: "customer service",
        array: customerService,
    },
    {
        title: "business",
        array: business,
    },
    {
        title: "our app",
        images: true,
        array: [android, ios],
    }
]

function Footer() {
    return (
        <Flex direction="column" cursor="pointer" >
            <FooterNewsletterContainer />
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
            <Flex
                direction={['column', 'column', 'row', 'row', 'row']}
                gridGap="20px"
                alignItems={['center', 'center', 'flex-start', 'flex-start', 'flex-start']}
                textAlign={['center', 'center', 'left', 'left', 'left']}
                borderBlock="1px solid #dadada"
                textTransform="capitalize"
                fontWeight="semibold"
                gridColumnGap="140px"
                py={['60px', '60px', '130px', '130px', '130px']} px="60px"
                fontSize="14px"
            >
                {footerInfo.map(e => <FooterInfoServices key={nanoid()} data={e} />)}
            </Flex>
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
        </Flex>
    );
}

export default Footer;