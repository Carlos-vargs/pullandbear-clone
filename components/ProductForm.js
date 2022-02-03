import { Button, Flex, Input, Select } from "@chakra-ui/react";
import InputFile from "@components/InputFile";
import PlusIcon from "@icons/PlusIcon";
import NextChakraLink from "@components/NextChakraLink";

function ProductForm({ onSubmit, formValues = [], onChange, categoryList, onOpen, loading }) {
    return (
        <Flex
            as="form"
            gridGap="20px"
            wrap="wrap"
            onSubmit={onSubmit}
            direction="column"
        >
            <Flex gridGap="20px" direction={['column', 'column', 'row', 'row', 'row']} >
                <Input
                    type="text"
                    size="lg"
                    borderRadius="xl"
                    placeholder="Title"
                    name="title"
                    required
                    value={formValues.title}
                    onChange={onChange}
                />
                <Input
                    type="text"
                    size="lg"
                    borderRadius="xl"
                    placeholder="Size"
                    name="size"
                    required
                    value={formValues.size}
                    onChange={onChange}
                />
            </Flex>
            <Flex gridGap="20px" direction={['column', 'column', 'row', 'row', 'row']}  >
                <Input
                    type="number"
                    size="lg"
                    borderRadius="xl"
                    placeholder="Price"
                    name="price"
                    min="0"
                    required
                    value={formValues.price}
                    onChange={onChange}
                />
                <Input
                    type="text"
                    size="lg"
                    borderRadius="xl"
                    placeholder="Mark"
                    name="mark"
                    value={formValues.mark}
                    onChange={onChange}
                />
            </Flex>
            <Flex gridGap="20px" direction={['column-reverse', 'column-reverse', 'row', 'row', 'row']}  >
                <Select
                    placeholder='Gender'
                    size='lg'
                    required
                    w={['full', 'full', '30%', '30%', '30%']}
                    name="gender"
                    borderRadius="xl"
                    value={formValues.gender}
                    onChange={onChange}
                >
                    <option value="male" >Man</option>
                    <option value="female" >Woman</option>
                </Select>
                <Flex alignItems="center" gridGap="20px" w={['full', 'full', '70%', '70%', '70%']}>
                    <Select
                        placeholder='Category'
                        size='lg'
                        required
                        borderRadius="xl"
                        name="category_id"
                        value={formValues.category_id}
                        onChange={onChange}
                    >
                        {
                            categoryList.map(e => <option key={e.id} value={e.id}>{e.name}</option>)
                        }
                    </Select>
                    <Button
                        p="6px"
                        w="36px"
                        h="36px"
                        minW="36px"
                        cursor="pointer"
                        borderRadius="full"
                        title="create new category"
                        colorScheme="teal"
                        onClick={onOpen}
                    >
                        <PlusIcon />
                    </Button>
                </Flex>
            </Flex>
            <InputFile
                name="image[]"
                onChange={onChange}
            />
            <Flex justifyContent="right" gridGap="20px" >
                <NextChakraLink _focus={{ boxShadow: "none" }} pageUrl={'/'} >
                    <Button colorScheme="teal">
                        Back
                    </Button>
                </NextChakraLink>
                <Button type="Submit"
                    isLoading={loading}
                    loadingText="Loading"
                    spinnerPlacement='end'
                    colorScheme="teal"
                >
                    Submit
                </Button>
            </Flex>
        </Flex>
    );
}

export default ProductForm;