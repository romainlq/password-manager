import { Flex } from '@chakra-ui/react'

const AppLayout = ({ children }) => {
    return (
        <Flex
            width="99vw"
            height="99vh"
            alignItems="stretch"
            flexDirection="column"
        >
            {children}
        </Flex>
    );
}

export default AppLayout;