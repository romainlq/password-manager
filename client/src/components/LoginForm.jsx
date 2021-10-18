import {
    Box,
    Button,
    Center,
    FormControl,
    Input,
    Text,
} from '@chakra-ui/react';

import { useState } from 'react';

const LoginForm = ({ submitLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box
            width="50%"
            marginX="auto"
            padding="8"
            borderRadius="lg"
            borderWidth="1px"
            justifyContent="center"
        >
            <FormControl spacing="8">
                <Text textAlign="center">Password Manager</Text>
                <Input
                    marginY="4"
                    id="username"
                    placeholder="anakin"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    placeholder="your password"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Center>
                    <Button
                        marginX="auto"
                        marginY="4"
                        colorScheme="teal"
                        onClick={() => submitLogin(username, password)}
                    >
                        Log in
                    </Button>
                </Center>
            </FormControl>
        </Box>
    );
};

export default LoginForm;
