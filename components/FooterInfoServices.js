import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function FooterInfoServices({ data }) {

    const { title, array, images } = data

    return (
        <Stack gridGap={"10px"} >
            <Heading fontSize="14px" pb="10px" textTransform="uppercase">{title}</Heading>
            {
                images
                    ? <Flex gridGap="20px" >
                        {array.map(e => <Image alt="download our app" src={e.src} key={nanoid()} objectFit="contain" maxW="116px" h="36px" />)}
                    </Flex>
                    : array.map(e => <Text key={nanoid()} color="#666666">{e}</Text>)
            }
        </Stack>
    );
}

export default FooterInfoServices;