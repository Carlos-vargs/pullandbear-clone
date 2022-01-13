import { Box } from "@chakra-ui/react";

function SearchIcon({ size }) {
    return (
        <Box
            w={size}
            h={size}
        >
            <svg
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                />
            </svg>
        </Box>
    );
}

export default SearchIcon
