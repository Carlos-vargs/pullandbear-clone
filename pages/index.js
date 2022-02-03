import { Flex, Heading } from "@chakra-ui/layout";
import FormLocation from "@components/FormLocation";
import NextChakraLink from "@components/NextChakraLink";
import AdminIcon from "@icons/AdminIcon";
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
			pt={['150px', '150px', '150px', '150px', '180px']}
		>
			<NextChakraLink
				_focus={{ boxShadow: "none" }}
				w="30px"
				position="absolute"
				right="20px"
				title="admin panel"
				color="white"
				top="20px"
				pageUrl={`/admin/create-products`}
			>
				<AdminIcon />
			</NextChakraLink>
			<Heading
				color="white"
				lineHeight="1"
				cursor="default"
				fontWeight="semibold"
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
