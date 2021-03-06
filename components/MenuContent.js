import { CloseButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import MenuItemColumns from "@components/MenuItemColumns";
import NextChakraLink from "@components/NextChakraLink";
import LogoCenter from '@components/LogoCenter';
import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/layout";
import { useRouter } from 'next/router'
import { nanoid } from "nanoid";
import axios from "axios";


function MenuContent({ onClose, isOpen }) {

    const [clothingCategories, setclothingCategories] = useState([])
    const [categories, setCategories] = useState([])

    const router = useRouter()
    const { gender } = router.query

    const menuSections = [
        {
            id: nanoid(),
            title: "sale up to 50%",
            offer: true,
            url: `/en/${gender}`,
        },
        {
            id: nanoid(),
            title: "new",
            url: `/en/${gender}`,
        },
        {
            id: nanoid(),
            title: "clothing",
            accordion: true,
            gender,
            onClose,
            array: clothingCategories,
        },
        {
            id: nanoid(),
            title: "join life",
            url: `/en/${gender}`,
        },
        {
            id: nanoid(),
            title: "pacific republic",
            url: `/en/${gender}`,
        },
        {
            id: nanoid(),
            title: "accessories",
            url: `/en/${gender}`,
        },

    ]

    categories.map(e => {
        if (e.name.includes('shoes')) {
            menuSections.push({
                id: nanoid(),
                title: "shoes",
                onClose,
                url: `/en/${gender}/shoes`,
            });
        }

        if (e.name.includes('bags')) {
            menuSections.push({
                id: nanoid(),
                title: "bags",
                onClose,
                url: `/en/${gender}/bags`,
            })
        }

    })

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

    useEffect(() => {

        async function getClothingCategories(category, gender) {

            try {

                gender === 'woman'
                    ? gender = 'female'
                    : gender = 'male'

                const { data: { data: filteredCategories } } = await axios.get(`${process.env.API_URL}/categories?gender=${gender}&category=${category}`)

                if (category === 'clothing') {
                    setclothingCategories(filteredCategories)
                } else {
                    setCategories(filteredCategories)
                }

            } catch (error) {
                console.error(error)
            }
        }

        getClothingCategories('all', gender)
        getClothingCategories('clothing', gender)

    }, [gender]);

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
                        justifyContent="center"
                    >
                        {
                            genderPages.map(({ id, title, url } = e, i) => <NextChakraLink
                                key={id}
                                pr="10px"
                                pageUrl={url}
                                onClick={onClose}
                                _focus={{
                                    boxShadow: "none"
                                }}
                                textDecoration="none !important"
                                borderRight={i === 0 ? "1px solid" : "0px"}
                                fontWeight={title === gender ? 'semibold' : 'normal'}
                            >
                                {title}
                            </NextChakraLink>
                            )
                        }
                    </Flex>
                    <MenuItemColumns array={menuSections} />
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    );
}

export default MenuContent;