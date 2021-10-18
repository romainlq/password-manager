import { Flex, HStack, Button, Text, Icon } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '@/modules/user/UserSlice';


const Header = () => {
    const username = useSelector((state) => state.user.username);

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOut());
    }

    return (
        <Flex
            height="60px"
            backgroundColor="white"
            borderBottom="1px solid var(--chakra-colors-gray-200)"
            align="center"
            paddingX="6"
            justify="space-between"
            width="100%"
        >
            <Text casing="uppercase" colorScheme="teal">
                Password Manager
            </Text>

            <HStack>
                <Text marginRight="6">{`Hello, ${username}`}</Text>
                <Button colorScheme="red" onClick={onLogOut}>Log out</Button>
            </HStack>
        </Flex>
    );
};

export default Header;
