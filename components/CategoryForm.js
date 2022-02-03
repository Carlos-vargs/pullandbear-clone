import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

function CategoryForm({ isOpen, onClose, onSubmit, onChange, loading, formValue = [] }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent my="auto !important">
                <ModalHeader textTransform="capitalize" >create new category</ModalHeader>
                <ModalCloseButton />
                <Flex as="form" direction="column" onSubmit={onSubmit} >
                    <ModalBody>
                        <Input
                            name="name"
                            placeholder="Name"
                            required
                            type="text"
                            onChange={onChange}
                            value={formValue.name}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            type="submit"
                            colorScheme='teal'
                            mr={3}
                            isLoading={loading}
                            loadingText="Loading"
                            spinnerPlacement='end'
                        >
                            Submit
                        </Button>
                    </ModalFooter>
                </Flex>
            </ModalContent>
        </Modal>
    );
}

export default CategoryForm;