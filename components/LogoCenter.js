import { Flex } from '@chakra-ui/react';
import LogoBlackIcon from '@icons/LogoBlackIcon';
import LogoWhiteIcon from '@icons/LogoWhiteIcon';

function LogoCenter({
    h = "50px",
    left = "50%",
    white = false,
    translate = "translateX(-50%)",
    top = ['9px', '32px', '32px', '32px', '32px'],
    w = ['140px', '250px', '250px', '250px', '250px'],
    position = "absolute",
}) {
    return (
        <Flex
            w={w}
            h={h}
            top={top}
            left={left}
            position={position}
            transform={translate}
        >
            {
                white
                    ? <LogoWhiteIcon />
                    : <LogoBlackIcon />

            }
        </Flex>
    );
}

export default LogoCenter;