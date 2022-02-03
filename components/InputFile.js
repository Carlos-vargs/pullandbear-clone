import { Flex, Input, Text } from "@chakra-ui/react";

function InputFile({ name, onChange }) {
    return (
        <Flex
            as="label"
            cursor="pointer"
            justifyContent="center"
            p={6}
            borderColor="gray.400"
            borderWidth="2px"
            borderStyle="dashed"
            borderRadius="md"
        >
            <Flex textAlign="center" gridGap="4px" direction="column">
                <Flex color="gray.600" direction={['column', 'column', 'row', 'row', 'row']} alignItems="center" >
                    <Flex
                        position="relative"
                        bgColor="white"
                        borderRadius="md"
                        fontWeight="medium"
                    >
                        <Text as="span">Upload a file</Text>
                        <Input name={name} type="file" hidden onChange={onChange} required multiple />
                    </Flex>
                    <Text as="span" pl={1} >or drag and drop</Text>
                </Flex>
                <Text as="span" color="gray.500" >PNG, JPG up to 2MB</Text>
            </Flex>
        </Flex>
    );
}

export default InputFile;