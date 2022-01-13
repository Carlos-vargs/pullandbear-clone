import { useDisclosure } from "@chakra-ui/react";
import SearchButton from "@components/SearchButton";
import SearchBarContent from "@components/SearchBarContent";

function SearchBar() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <SearchButton onOpen={onOpen} />
            <SearchBarContent isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default SearchBar;