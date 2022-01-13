import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from '@icons/SearchIcon';

function SearchForm() {
    return (
        <InputGroup maxW="746px" as="form">
            <InputLeftElement pb="10px" pointerEvents='none'>
                <SearchIcon size="26px" />
            </InputLeftElement>
            <Input
                _focus={{
                    boxShadow: "none",
                }}
                _placeholder={{
                    color: "black",
                    textTransform: "capitalize",
                }}
                placeholder="what are you looking for?"
                pb="10px"
                mb="205px"
                border="0px"
                fontSize={['24px', '24px', '24px', '30px', '30px']}
                borderRadius="0px"
                borderBottom="1px solid"

            />
        </InputGroup>
    );
}

export default SearchForm;