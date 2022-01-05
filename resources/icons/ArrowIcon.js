import { Box } from "@chakra-ui/layout";

function ArrowIcon() {
    return (
        <Box
        transform="rotate(-90deg)"
        >
            <svg width={13} height={52} >
                <path
                    d="M.503 43.981h4.521v-44h2.998v44h4.522l-5.99 7.383-6.051-7.383z"
                    fill="currentColor"
                />
            </svg>
        </Box>
    )
}

export default ArrowIcon;
