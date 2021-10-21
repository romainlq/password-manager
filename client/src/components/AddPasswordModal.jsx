import { useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Input,
    FormHelperText,
    Progress,
} from '@chakra-ui/react';
import PasswordInput from './PasswordInput';
import zxcvbn from 'zxcvbn';
import { useDispatch } from 'react-redux';
import {
    createPassword,
    fetchPasswords,
} from '@/modules/password/PasswordSlice';

const AddPasswordModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const [domainName, setDomainName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const renderPasswordScore = () => {
        if (password.length === 0) {
            return;
        }
        const { score } = zxcvbn(password);
        let progress = 0;
        let color = 'red';
        switch (score) {
            case 0:
            default:
                color = 'red';
                progress = 20;
                break;
            case 1:
                color = 'red';
                progress = 40;
                break;
            case 2:
                color = 'yellow';
                progress = 60;
                break;
            case 3:
                color = 'green';
                progress = 80;
                break;
            case 4:
                color = 'green';
                progress = 100;
                break;
        }

        return (
            <Progress
                marginY="4"
                borderRadius="8"
                value={progress}
                colorScheme={color}
            />
        );
    };

    const onClickCreate = async () => {
        const newPassword = {
            domainName,
            username,
            email,
            password,
        };
        await dispatch(createPassword(newPassword));
        setPassword('');
        onClose();
        return await dispatch(fetchPasswords());
    };

    const generatePassword = () => {
        const CHARS =
            '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const PASSWORD_LENGTH = 12;
        let newPassword = '';

        for (var i = 0; i <= PASSWORD_LENGTH; i++) {
            var randomNumber = Math.floor(Math.random() * CHARS.length);
            newPassword += CHARS.substring(randomNumber, randomNumber + 1);
        }
        setPassword(newPassword);
    };

    const enableCreateButton =
        domainName.length > 0 &&
        password.length >= 6 &&
        (username.length > 0 || email.length > 0);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a new password</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <FormControl id="domainName" isRequired>
                        <FormLabel>Domain name</FormLabel>
                        <Input
                            marginY="2"
                            onChange={(e) => setDomainName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
                            marginY="2"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input
                            marginY="2"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormHelperText>
                            Password must contains at least 6 characters
                        </FormHelperText>
                        <Button
                            marginY={2}
                            onClick={generatePassword}
                            colorScheme="teal"
                        >
                            Generate
                        </Button>
                        {renderPasswordScore()}
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button marginRight="3" variant="ghost" onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        disabled={!enableCreateButton}
                        colorScheme="green"
                        onClick={onClickCreate}
                    >
                        Create
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddPasswordModal;
