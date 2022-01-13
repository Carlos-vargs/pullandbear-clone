import { AccordionPanel, Button, Flex, Radio, RadioGroup } from "@chakra-ui/react";

function PrivacyPolicyContentForm() {
    return (
        <AccordionPanel alignItems="center" display="flex" flexDir="column" gridGap="30px" >
            <Flex gridGap="40px" direction={['column', 'column', 'row', 'row', 'row',]} textAlign="center" alignItems="center" >
                <RadioGroup display="flex" gridGap="20px" >
                    <Radio value="woman" size="sm">woman</Radio>
                    <Radio value="man" size="sm">man</Radio>
                </RadioGroup>
                <Radio size="sm" >
                    <Flex as="span"
                        w="240px"
                        fontSize="12px"
                        textAlign="left"
                        textTransform="none"
                        whiteSpace="pre-wrap"
                    >
                        I have read and understand the information on the use of my personal data
                        explained in the Privacy Policy, and I agree to receive customised commercial
                        communications from Pull&Bear by email and other means.
                    </Flex>
                </Radio>
            </Flex>
            <Button textTransform="uppercase" fontSize="12px">sign up</Button>
        </AccordionPanel>
    );
}

export default PrivacyPolicyContentForm;