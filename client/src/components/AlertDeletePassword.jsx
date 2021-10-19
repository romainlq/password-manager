import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
} from '@chakra-ui/react';

const AlertDeletePassword = ({ isOpen, onClose, onSubmit }) => {
    const onSubmitClick = () => {
        onSubmit();
        onClose();
    };

    return (
        <AlertDialog isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay backgroundColor="var(--chakra-colors-blackAlpha-200)">
                <AlertDialogContent>
                    <AlertDialogHeader>Delete password</AlertDialogHeader>

                    <AlertDialogBody>
                        Are you sure to delete this password?
                    </AlertDialogBody>

                    <AlertDialogFooter>
                        <Button mr="4" onClick={onClose}>
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
