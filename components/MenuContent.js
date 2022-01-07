import { Box, Flex, Grid, Link, Text } from "@chakra-ui/layout";
import LogoBlackIcon from "@icons/LogoBlackIcon";
import NextLink from "next/link"
import XIcon from "@icons/XIcon";
import { nanoid } from "nanoid";

function MenuContent({ handleClick, left }) {

    const menuSections = [
        {
            id: nanoid(),
            title: "sale up to 50%",
            offer: true,
        },
        {
            id: nanoid(),
            title: "new",
        },
        {
            id: nanoid(),
            title: "clothing"
        },
        {
            id: nanoid(),
            title: "shoes"
        },
        {
            id: nanoid(),
            title: "join life",
        },
        {
            id: nanoid(),
            title: "pacific republic"
        },
        {
            id: nanoid(),
            title: "accessories"
        },
        {
            id: nanoid(),
            title: "bags"
        },
    ]

    const genderPages = [
        {
            id: nanoid(),
            url: "/en/woman",
            title: "woman"
        },
        {
            id: nanoid(),
            url: "/en/man",
            title: "man"
        },
    ]

    return (
        <Box
            transition="all .2s ease"
            bgColor="rgba(0,0,0,0.6)"
            position="absolute"
            zIndex="2"
            w="100vw"
            h="100vh"
        >
            <Flex
                h="100vh"
                zIndex="3"
                pt="140px"
                color="black"
                gridGap="20px"
                bgColor="white"
                direction="column"
                position="absolute"
                left={`${left}vw`}
                alignItems="center"
                transition="all .4s ease"
                textTransform="uppercase"
                w={['100vw', '100vw', '100vw', '60vw', '60vw']}
                className="animate__animated animate__fadeInLeftBig"
            >
                <Box
                    top="30px"
                    left="30px"
                    color="black"
                    cursor="pointer"
                    title="close menu"
                    position="absolute"
                    onClick={handleClick}
                    w={['30px', '40px', '40px', '40px', '40px']}
                    h={['30px', '40px', '40px', '40px', '40px']}
                >
                    <XIcon />
                </Box>
                <Flex
                    h="50px"
                    left="50%"
                    top="20px"
                    position="absolute"
                    transform="translate(-50%)"
                    top={['9px', '32px', '32px', '32px', '32px']}
                    w={['134px', '250px', '250px', '250px', '250px']}
                >
                    <LogoBlackIcon />
                </Flex>
                <Flex
                    fontSize="14px"
                    fontWeight="semibold"
                    gridGap="10px"
                >
                    {
                        genderPages.map(({ id, title, url } = e, i) => <NextLink
                            href={url}
                            passHref
                            key={id}
                        >
                            <Link
                                textDecoration="none !important"
                                _focus={{
                                    boxShadow: "none"
                                }}
                                borderRight={i === 0 ? "1px solid" : "0px"}
                                pr="10px"
                            >
                                {title}
                            </Link>
                        </NextLink>)
                    }
                </Flex>
                <Grid
                    templateColumns="repeat(2, minmax(0, 1fr))"
                    gridAutoRows="max-content"
                    textAlign="center"
                    cursor="pointer"
                    gap="20px"
                >
                    {
                        menuSections.map(({ offer, title, id } = e) => <Text as="span"
                            color={offer ? "red" : "black"}
                            letterSpacing="-1px"
                            fontWeight="semibold"
                            fontSize="30px"
                            key={id}
                        >
                            {title}
                        </Text>)
                    }
                </Grid>
            </Flex>
        </Box>
    );
}

export default MenuContent;