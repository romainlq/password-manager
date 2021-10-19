import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

const AlertDeletePassword = ({ isOpen, onClose, onSubmit }) => {
    // const cancelRef = useRef();

    const onSubmitClick = () => {
        onSubmit();
        onClose();
    };

    return (
        <AlertDialog
            isOpen={isOpen}
            onClose={onClose}
            // leastDestructiveRef={cancelRef}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>Delete password</AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure to delete this password?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button
                            mr="4"
                            // ref={cancelRef}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={onSubmitClick}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AlertDeletePassword;
