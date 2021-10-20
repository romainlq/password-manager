import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    useDisclosure,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';

import Header from '@/components/Header';
import PasswordInput from '@/components/PasswordInput';
import AddPasswordModal from '@/components/AddPasswordModal';
import AlertDeletePassword from '@/components/AlertDeletePassword';
import {
    fetchPasswords,
    removePassword,
} from '@/modules/password/PasswordSlice';

const Home = () => {
    const dispatch = useDispatch();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [passwordToDeleteId, setPasswordToDeleteId] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [_, setLocation] = useLocation();

    const authenticated = useSelector((state) => state.user.authenticated);

    const passwords = useSelector((state) => state.password.passwords);

    useEffect(() => {
        if (!authenticated) {
            setLocation(PATHS.LOGIN, { replace: true });
        } else {
            dispatch(fetchPasswords());
        }
    }, [authenticated]);

    const onPressDelete = (idToDelete) => {
        setPasswordToDeleteId(idToDelete);
        setShowDeleteModal(true);
    };

    const onDeletePassword = async () => {
        await dispatch(removePassword(passwordToDeleteId));
        return await dispatch(fetchPasswords());
    };

    const renderRow = (password) => {
        return (
            <Tr key={password.id}>
                <Td>
                    <Text>{password.domainName}</Text>
                </Td>
                <Td>{password.email || password.username}</Td>
                <Td>
                    <PasswordInput value={password.password} />
                </Td>
                <Td>
                    <HStack>
                        <Button
                            colorScheme="red"
                            onClick={() => onPressDelete(password.id)}
                        >
                            Delete
                        </Button>
                    </HStack>
                </Td>
            </Tr>
        );
    };

    return (
        <Flex flexDirection="column">
            <AddPasswordModal isOpen={isOpen} onClose={onClose} />
            <AlertDeletePassword
                onSubmit={onDeletePassword}
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
            />
            <Header />
            <HStack padding={6}>
                <Button
                    size="md"
                    colorScheme="teal"
                    leftIcon={<SmallAddIcon w={5} h={5} />}
                    onClick={onOpen}
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
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {passwords.map((password) => renderRow(password))}
                </Tbody>
            </Table>
        </Flex>
    );
};

export default Home;
