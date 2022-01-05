import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Flex, Link } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import ArrowIcon from "@icons/ArrowIcon";
import { nanoid } from "nanoid";

function FormLocation() {
    return (
        <Flex
            as="from"
            gridGap="16px"
            w="full"
            justifyContent="center"
            fontSize="14px"
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
                <option key={nanoid()} value={"nic"} selected >Nicaragua</option>
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
                <option key={nanoid()} value={"nic"} selected >Español</option>
            </Select>
            <Flex
                fontSize="12px"
                bgColor="white"
                alignItems="center"
                maxW="254px"
                w="full"
                justifyContent="space-between"
                px="14px"
                cursor="default"
                textTransform="uppercase"
            >
                recordar mi selección
                <Checkbox
                    size="lg"
                />
            </Flex>
            <Link
                href="/#"
                borderRadius="none"
                size="lg"
                bgColor="black"
                px="50px"
                color="white"
                _hover={{
                    bgColor:"green.200"
                }}
                _focus={{
                    bgColor:"green.200"
                }}
            >
                <ArrowIcon />
            </Link>
        </Flex>
    );
}

export default FormLocation;