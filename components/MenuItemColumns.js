import { Flex } from "@chakra-ui/react";
import MenuItem from "@components/MenuItem";
import MenuItemAccordion from "@components/MenuItemAccordion";
import { nanoid } from "nanoid";

function MenuItemColumns({ array = [] }) {

    const index = array.length

    let divider = 1.5

    if (index === 8) {
        divider = 2
    }

    const firstColumn = array.slice(0, index / divider)
    const secondColumn = array.slice(index / divider, index)

    const columns = [firstColumn, secondColumn]

    return (
        <Flex
            alignItems={['center', 'center', 'flex-start', 'flex-start', 'flex-start']}
            direction={['column', 'column', 'row', 'row', 'row']}
            gridGap={['10px', '10px', '40px', '40px', '40px']}
            justifyContent="center"
            textAlign="center"
            cursor="pointer"
            pt="20px"
        >
            {
                columns.map(column => <Flex key={nanoid()} direction="column" gridGap="10px" >
                    {
                        column.map(item =>
                            item.accordion
                                ? <MenuItemAccordion key={item.id} data={item} />
                                : <MenuItem key={item.id} data={item} />
                        )
                    }
                </Flex>)
            }
        </Flex>

    );
}

export default MenuItemColumns;