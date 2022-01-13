import MenuContent from "@components/MenuContent";
import { useDisclosure } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import MenuIcon from "@icons/MenuIcon";

function Menu() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                top="30px"
                zIndex={2}
                left="30px"
                color="white"
                position="fixed"
                cursor="pointer"
                onClick={onOpen}
                title="open menu"
                w={['30px', '40px', '40px', '40px', '40px']}
                h={['30px', '40px', '40px', '40px', '40px']}
            >
                <MenuIcon />
            </Box>
            <MenuContent
                onClose={onClose}
                isOpen={isOpen}
            />
        </>
    )
}

export default Menu;