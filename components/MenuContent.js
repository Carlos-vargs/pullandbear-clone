import { Box, Flex, Grid, Text } from "@chakra-ui/layout";
import LogoCenter from '@components/LogoCenter';
import { nanoid } from "nanoid";
import NextChakraLink from "@components/NextChakraLink";
import { CloseButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";

function MenuContent({ onClose, isOpen }) {

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
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xl"  >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerBody
                    w="full"
                    pt="120px"
                    display="flex"
                    gridGap="20px"
                    flexDirection="column"
                    textTransform="uppercase"
                >
                    <CloseButton
                        title="close menu"
                        position="absolute"
                        onClick={onClose}
                        top="30px"
                        left="30px"
                        size="lg"
                    />
                    <LogoCenter
                        w={['170px', '250px', '250px', '250px', '250px']}
                        position="absolute"
                        top={"26px"}
                    />
                    <Flex
                        gridGap="10px"
                        fontSize="14px"
                        fontWeight="semibold"
                        justifyContent="center"
                    >
                        {
                            genderPages.map(({ id, title, url } = e, i) => <NextChakraLink
                                pageUrl={url}
                                key={id}
                                onClick={onClose}
                                textDecoration="none !important"
                                _focus={{
                                    boxShadow: "none"
                                }}
                                borderRight={i === 0 ? "1px solid" : "0px"}
                                pr="10px"
                            >
                                {title}
                            </NextChakraLink>
                            )
                        }
                    </Flex>
                    <Grid
                        templateColumns={[
                            'repeat(1, minmax(0, 1fr))',
                            'repeat(1, minmax(0, 1fr))',
                            'repeat(2, minmax(0, 1fr))',
                            'repeat(2, minmax(0, 1fr))',
                            'repeat(2, minmax(0, 1fr))',
                        ]}
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
                                fontSize={['26px', '26px', '30px', '30px', '30px']}
                                key={id}
                            >
                                {title}
                            </Text>)
                        }
                    </Grid>
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    );
}

export default MenuContent;