import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Text, } from "@chakra-ui/react";
import MenuItem from "@components/MenuItem";
import NextChakraLink from "@components/NextChakraLink";

function MenuItemAccordion({ data }) {

    const { gender, offer, title, array, onClose } = data

    return (
        <Accordion allowToggle >
            <AccordionItem border="0px !important">
                <AccordionButton
                    textTransform="inherit"
                    p="0px !important" boxShadow="none !important"
                    bgColor="transparent !important" justifyContent="center" >
                    <Text as="span"
                        fontSize={['26px', '26px', '30px', '30px', '30px']}
                        color={offer ? "red" : "black"}
                        fontWeight="semibold"
                        letterSpacing="-1px"
                    >
                        {title}
                    </Text>
                </AccordionButton>
                <AccordionPanel>
                    {
                        array.map(e => <NextChakraLink
                            key={e.id}
                            display="block"
                            onClick={onClose}
                            boxShadow="none !important"
                            pageUrl={`/en/${gender}/${e.name}`}
                        >
                            {e.name}
                        </NextChakraLink>)
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}

export default MenuItemAccordion;