import { Button, Text } from '@chakra-ui/react';
import SearchIcon from '@icons/SearchIcon';

function SearchButton({ onOpen }) {
    return (
        <Button
            w={['0px', '0px', '0px', 'full', 'full']}
            top="30px"
            zIndex={2}
            right="30px"
            maxW="220px"
            color="white"
            title="search"
            fontSize="14px"
            onClick={onOpen}
            position="fixed"
            borderRadius="0"
            fontWeight="semibold"
            bgColor="transparent"
            justifyContent={"left"}
            borderBottom="2px"
            borderBottomColor={['transparent', 'transparent', 'transparent', 'white', 'white']}
            textTransform="uppercase"
            leftIcon={<SearchIcon size="20px" />}
            _hover={{
                bgColor: "transparent",
            }}
            _focus={{
                bgColor: "transparent",
            }}
            _active={{
                bgColor: "transparent",
            }}
        >
            <Text as="span" display={['none', 'none', 'none', 'flex', 'flex']} >
                search
            </Text>
        </Button>
    );
}

export default SearchButton;