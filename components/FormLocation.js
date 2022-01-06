import { Checkbox } from "@chakra-ui/checkbox";
import { Flex, Link } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import ArrowIcon from "@icons/ArrowIcon";
import { nanoid } from "nanoid";
import NextLink from "next/link"


function FormLocation() {
    return (
        <Flex
            as="from"
            gridGap="16px"
            w="full"
            justifyContent="center"
            alignItems="center"
            fontSize="14px"
            direction={['column', 'column', 'column', 'row', 'row']}
        >
            <Select
                size='lg'
                bgColor="white"
                borderRadius="none"
                color="gray.700"
                fontSize="12px"
                maxW="254px"
                textTransform="uppercase"
            >
                <option key={nanoid()} value={"nic"} selected >canada</option>
            </Select>
            <Select
                borderRadius="none"
                size='lg'
                bgColor="white"
                color="gray.700"
                fontSize="12px"
                maxW="254px"
                textTransform="uppercase"
            >
                <option key={nanoid()} value={"nic"} selected >english</option>
            </Select>
            <Flex
                fontSize="12px"
                bgColor="white"
                alignItems="center"
                maxW="254px"
                w="full"
                justifyContent="space-between"
                px="14px"
                h="3rem"
                cursor="default"
                textTransform="uppercase"
            >
                remember my selection
                <Checkbox
                    size="lg"
                />
            </Flex>
            <NextLink
                href="/en"
                passHref
            >
                <Link
                    borderRadius="none"
                    size="lg"
                    bgColor="black"
                    px="50px"
                    color="white"
                    _hover={{
                        bgColor: "green.200"
                    }}
                    _focus={{
                        bgColor: "green.200"
                    }}
                >
                    <ArrowIcon />
                </Link>
            </NextLink>
        </Flex>
    );
}

export default FormLocation;