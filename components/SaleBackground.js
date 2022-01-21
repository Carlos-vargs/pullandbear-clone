import { Flex, Heading, Stack, Text, Box } from '@chakra-ui/layout';

function SaleBackground() {

    return (
        <Box position="relative" >
            <Flex
                objectFit={['cover', 'cover', 'cover', 'contain', 'contain']}
                minH={['60vh', '60vh', '60vh', '90vh', '90vh']}
                src={"/videobg-pul&bear.mp4"}
                loop={true}
                zIndex={0}
                as="video"
                autoPlay
                muted
            />
            <Stack
                letterSpacing={['-1px', '-1px', '-1px', '-2px', '-2px']}
                transform="translate(-50%, -50%)"
                userSelect="none"
                position="absolute"
                alignItems="center"
                textAlign="center"
                color="white"
                zIndex={1}
                left="50%"
                top="50%"
            >
                <Heading
                    fontSize={['60px', '60px', '60px', '80px', '80px']}
                    textTransform="uppercase"
                >
                    sale
                </Heading>
                <Text
                    fontSize={['24px', '24px', '24px', '30px', '30px']}
                    fontWeight="semibold"
                >
                    Discover the promotions at your nearest store
                </Text>
            </Stack>
        </Box>
    );
}

export default SaleBackground;