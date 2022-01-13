import { Accordion, AccordionButton, AccordionItem, Flex, Input } from "@chakra-ui/react";
import PrivacyPolicyContentForm from "@components/PrivacyPolicyContentForm";

function FormNewsletter() {
    return (
        <Flex as="form"
            fontWeight="semibold"
            textTransform="uppercase"
            gridGap="40px"
            letterSpacing="-.5px"
            direction="column"
            w="full"
            alignItems="center"
        >
            <Accordion allowToggle>
                <AccordionItem borderColor="transparent" display="flex" flexDir="column" alignItems="center" gridGap="20px" >
                <AccordionButton _focus={{boxShadow:"none"}} _hover={{backgroundColor:"transparent"}} maxW="200px">
                    <Input
                        borderBottom="1px solid black"
                        borderRadius="none"
                        borderColor="transparent"
                        fontSize="12px"
                        placeholder="enter-mail"
                        _focus={{ boxShadow: "none", borderBottom: "1px solid black" }}
                        _hover={{ boxShadow: "none", borderBottom: "1px solid black" }}
                        _placeholder={{ textTransform: "uppercase", textAlign: "center", color: "black", fontWeight: "semibold" }}
                    />
                    </AccordionButton>
                    <PrivacyPolicyContentForm />
                </AccordionItem>
            </Accordion>
        </Flex>
    );
}

export default FormNewsletter;