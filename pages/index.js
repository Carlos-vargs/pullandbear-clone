import { Flex, Heading } from "@chakra-ui/layout";
import FormLocation from "@components/FormLocation";
import bgImage from '@images/pullandbear-background.webp';

export default function Home() {
	return (
        <Flex
			position="relative"
			bgImg={`url(${bgImage.src})`}
			w="100vw"
			minH="100vh"
			bgPosition="top"
			bgSize="cover"
			justifyContent="flex-start"
			alignItems="center"
			gridRowGap="70px"
			direction="column"
			pt="104px"

		>
			<Heading
				textTransform="uppercase"
				color={'white'}
				fontSize="160px"
				letterSpacing="-4px"
				fontWeight="bold"
				cursor="default"
			>
				pull&bear
			</Heading>
			<FormLocation />

		</Flex>
    );
}
