import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

import { getTodo } from '@/lib/api';
import { Todo } from '@/types/todo';

type Props = {
  setTodo: Dispatch<SetStateAction<Todo | undefined>>;
};

export const AddModal = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = async () => {
    const result = await getTodo();
    console.log('click');
    props.setTodo(result);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="twitter">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Modal Body</ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleClick}>
              Request API
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
