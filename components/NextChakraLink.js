import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function NextChakraLink({ pageUrl, children, ...rest }) {
    return (
        <NextLink
            href={pageUrl}
            passHref
        >
            <Link
                {...rest}
                textDecoration="none !important"
            >
                {children}
            </Link>
        </NextLink>
    );
}

export default NextChakraLink;