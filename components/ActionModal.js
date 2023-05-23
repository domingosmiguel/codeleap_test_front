import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { styled } from 'styled-components';
import ActionButton from './ActionButton';

export default function ActionModal({
  action,
  closeModal,
  isLoading,
  isOpen,
  modalData,
  disableButton,
  actionButtonColor,
}) {
  return (
    <Modal onClose={closeModal} size='md' isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalData.tittle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalData.body}</ModalBody>
        <ModalFooter>
          <StyledButton onClick={closeModal}>
            {modalData.cancelText}
          </StyledButton>
          <ActionButton
            disabled={disableButton}
            isLoading={isLoading}
            onClick={action}
            backgroundColor={actionButtonColor}
          >
            {modalData.confirmText}
          </ActionButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const StyledButton = styled(Button)`
  height: 2rem;
  width: 7.5rem;
  margin-right: 0.5rem;
  border: 1px solid #000;
`;
