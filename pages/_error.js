
import { Flex } from "@chakra-ui/layout"

function Error({ statusCode }) {
    return (
        <Flex>
            {
                statusCode
                    ? `oops! an error ${statusCode} occurred on server`
                    : 'an error occurred on client'
            }
        </Flex>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error