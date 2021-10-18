import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'wouter';
import { PATHS } from '@/routes';

import {
    Text,
    Button,
    Flex,
    Table,
    Tr,
    Th,
    Td,
    Thead,
    Tbody,
    HStack,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

import Header from '@/components/Header';
import PasswordInput from '@/components/PasswordInput';

const Home = () => {
    const authenticated = useSelector((state) => state.user.authenticated);

    const [_, setLocation] = useLocation();

    useEffect(() => {
        if (!authenticated) {
            setLocation(PATHS.LOGIN, { replace: true });
        }
    }, [authenticated]);

    const data = [
        {
            id: 1,
            domainName: 'facebook.com',
            email: 'anakin.skywalker@facebook.com',
            password: 'anakinfacebook123',
        },
        {
            id: 2,
            domainName: 'twitter.com',
            username: 'anakin.skywalker',
            password: 'anakintwitter123',
        },
    ];

    return (
        <Flex flexDirection="column">
            <Header />
            <HStack padding={6}>
                <Button
                    size="md"
                    colorScheme="teal"
                    leftIcon={<SmallAddIcon w={5} h={5} />}
                >
                    <Text casing="uppercase">Add</Text>
                </Button>
            </HStack>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Website</Th>
                        <Th>Username / Email</Th>
                        <Th>Password</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((e) => (
                        <Tr>
                            <Td>
                                <Text>{e.domainName}</Text>
                            </Td>
                            <Td>{e.email || e.username}</Td>
                            <Td>
                                <PasswordInput value={e.password} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default Home;
