import { nanoid } from "nanoid";
import Menu from "@components/Menu";
import { Flex } from "@chakra-ui/layout";
import man from '@images/pullandbear-man.webp';
import LogoWhiteIcon from "@icons/LogoWhiteIcon";
import woman from '@images/pullandbear-woman.webp';
import ClothingGenderCard from "@components/ClothingGenderCard";

function En() {

    const ClothingGenderInfo = [
        {
            id: nanoid(),
            url: "/en/woman",
            gender: "woman",
            image: woman.src,
        },
        {
            id: nanoid(),
            url: "/en/man",
            gender: "man",
            image: man.src,
        },
    ]

    return (
        <Flex
            w="full"
            minH="100vh"
            color="white"
            fontSize="60px"
            position="relative"
        >
            <Menu />
            <Flex
                h="50px"
                w={['134px', '250px', '250px', '250px', '250px']}
                top={['9px', '32px', '32px', '32px', '32px']}
                left="50%"
                position="absolute"
                transform="translateX(-50%)"
            >
                <LogoWhiteIcon />
            </Flex>
            {
                ClothingGenderInfo.map(e => <ClothingGenderCard key={e.id} data={e} />)
            }
        </Flex>
    );
}

export default En;