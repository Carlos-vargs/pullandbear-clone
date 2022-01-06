import { Flex, Heading } from "@chakra-ui/layout";
import FormLocation from "@components/FormLocation";
import bgImage from '@images/pullandbear-background.webp';

export default function Home() {
	return (
		<Flex
			w="100vw"
			minH="100vh"
			bgSize="cover"
			bgPosition="top"
			gridRowGap="70px"
			direction="column"
			alignItems="center"
			position="relative"
			justifyContent="flex-start"
			bgImg={`url(${bgImage.src})`}
			pt={['40px', '40px', '40px', '40px', '104px']}
			pb={['40px', '40px', '40px', '40px', '0px']}
		>
			<Heading
				color="white"
				lineHeight="1"
				cursor="default"
				fontWeight="bold"
				textAlign="center"
				letterSpacing="-4px"
				textTransform="uppercase"
				px={['74px', '74px', '74px', '0px', '0px']}
				fontSize={['60px', '60px', '60px', '140px', '160px']}
			>
				pull & bear
			</Heading>
			<FormLocation />

		</Flex>
	);
}
