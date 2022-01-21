import { nanoid } from 'nanoid';
import { Flex } from '@chakra-ui/react';
import ios from '@images/download-ios.png';
import android from '@images/download-android.png';
import FooterInfoServices from '@components/FooterInfoServices';

const business = [
    "contact",
    "about us",
    "store locator",
    "franchise",
    "work with us",
]

const customerService = [
    "chat",
    "contact",
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

function FooterInfoServicesContainer() {
    return (
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
    );
}

export default FooterInfoServicesContainer;