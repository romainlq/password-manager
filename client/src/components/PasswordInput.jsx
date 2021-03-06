import {
    Icon,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

const PasswordInput = ({ value, disabled = false, onChange = () => {} }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => setShow(!show);

    return (
        <InputGroup size="md">
            <Input disabled={disabled} onChange={onChange} type={show ? 'text' : 'password'} value={value} />
            <InputRightElement width="1rem">
                <Button onClick={handleClick}>
                    <Icon as={show ? RiEyeLine : RiEyeOffLine} />
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default PasswordInput;
