import MenuContent from "@components/MenuContent";
import { Box } from "@chakra-ui/layout";
import MenuIcon from "@icons/MenuIcon";
import { useState } from "react";

function Menu() {

    const [isOpen, setIsOpen] = useState(false)
    const [SizeLeft, setSizeLeft] = useState(0)

    function handleClick() {

        if (isOpen) {

            setSizeLeft(-100)

            setTimeout(() => {
                setIsOpen(false)
            }, 400);

        } else {

            setSizeLeft(0)

            setIsOpen(true)

        }

    }

    return (
        <>
            <Box
                top="30px"
                left="30px"
                cursor="pointer"
                title="open menu"
                position="absolute"
                onClick={handleClick}
                w={['30px', '40px', '40px', '40px', '40px']}
                h={['30px', '40px', '40px', '40px', '40px']}
            >
                <MenuIcon />
            </Box>
            {
                isOpen && <MenuContent
                    left={SizeLeft}
                    handleClick={handleClick}
                />
            }
        </>
    )
}

export default Menu;