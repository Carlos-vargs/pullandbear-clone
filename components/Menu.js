import { Box, Flex } from "@chakra-ui/layout";
import LogoBlackIcon from "@icons/LogoBlackIcon";
import MenuIcon from "@icons/MenuIcon";
import XIcon from "@icons/XIcon";
import { useState } from "react";

function Menu() {

    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        isOpen
            ? setIsOpen(false)
            : setIsOpen(true)
    }

    return (
        <>
            <Box
                w="30px"
                h="30px"
                top="30px"
                left="30px"
                cursor="pointer"
                title="open menu"
                position="absolute"
                onClick={handleClick}
            >
                <MenuIcon />
            </Box>
            {
                isOpen && <Flex
                    top="0"
                    left="0"
                    right="0"
                    zIndex="2"
                    bottom="0"
                    bgColor="white"
                    position="absolute"
                >
                    <Box
                        top="20px"
                        right="20px"
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
                        h="40px"
                        left="50%"
                        top="20px"
                        position="absolute"
                        transform="translate(-50%)"
                        w={['150px', '200px', '200px', '200px', '200px']}
                    >
                        <LogoBlackIcon />
                    </Flex>
                </Flex>
            }
        </>
    )
}

export default Menu;