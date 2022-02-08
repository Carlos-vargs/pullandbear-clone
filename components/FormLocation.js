import NextChakraLink from "@components/NextChakraLink";
import { Checkbox } from "@chakra-ui/checkbox";
import { Select } from "@chakra-ui/select";
import { Flex } from "@chakra-ui/layout";
import ArrowIcon from "@icons/ArrowIcon";
import { nanoid } from "nanoid";

function FormLocation() {
    return (
        <Flex
            w="full"
            as="from"
            gridGap="16px"
            fontSize="12px"
            alignItems="center"
            justifyContent="center"
            direction={['column', 'column', 'column', 'row', 'row']}
        >
            <Select
                size='lg'
                maxW="254px"
                fontSize="12px"
                bgColor="white"
                color="gray.700"
                borderRadius="none"
                defaultValue={"nic"}
                textTransform="uppercase"
            >
                <option key={nanoid()} value={"nic"}>nicaragua</option>
            </Select>
            <Select
                size='lg'
                maxW="254px"
                bgColor="white"
                fontSize="12px"
                color="gray.700"
                borderRadius="none"
                defaultValue={"en"}
                textTransform="uppercase"
            >
                <option key={nanoid()} value={"en"}>english</option>
            </Select>

            <Checkbox
                h="3rem"
                w="full"
                size="lg"
                px="14px"
                maxW="254px"
                bgColor="white"
                alignItems="center"
                textTransform="uppercase"
                fontSize="12px"
                className="chakra-checkbox__label-resize"
                flexDirection="row-reverse"
                justifyContent="space-between"
            >
                remember my selection
            </Checkbox>
            <NextChakraLink
                pageUrl={"/en"}
                size="lg"
                px="50px"
                bgColor="black"
                title="gender page"
                color="white"
                borderRadius="none"
                _hover={{
                    bgColor: "green.200"
                }}
                _focus={{
                    bgColor: "green.200"
                }}
            >
                <ArrowIcon />
            </NextChakraLink>
        </Flex>
    );
}

export default FormLocation;