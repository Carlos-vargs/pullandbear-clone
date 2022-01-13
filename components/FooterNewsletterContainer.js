import { Flex, Heading } from '@chakra-ui/react';
import FormNewsletter from '@components/NewsletterForm';

function FooterNewsletterContainer() {
    return (
        <Flex
            py="83px"
            bg="linear-gradient(180deg, #fff 10%, #cce7da 35%, #9cb9d5 100%)"
            alignItems="center"
            gridGap="50px"
            textAlign="center"
            direction="column"
        >
            <Heading fontSize={['26px','26px','30px','30px','30px']} >Subscribe to our newsletter</Heading>
            <FormNewsletter />
        </Flex>
    );
}

export default FooterNewsletterContainer;