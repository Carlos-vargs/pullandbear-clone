import { nanoid } from "nanoid";
import Menu from "@components/Menu";
import { Flex } from "@chakra-ui/layout";
import man from '@images/pullandbear-man.webp';
import woman from '@images/pullandbear-woman.webp';
import ClothingGenderCard from "@components/ClothingGenderCard";
import LogoCenter from "@components/LogoCenter";

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
            <LogoCenter white={true} />
            
            {
                ClothingGenderInfo.map(e => <ClothingGenderCard key={e.id} data={e} />)
            }
        </Flex>
    );
}

export default En;