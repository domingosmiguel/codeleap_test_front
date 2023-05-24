import ActionModal from '@/components/ActionModal';
import { useCallback, useEffect, useState } from 'react';
import {
  InputTittle,
  StyledInput,
  StyledTextarea,
} from '../../components/styles';
import useEditPost from '../api/useEditPost';
import useForm from '../useForm';

export default function useModalEdit(post) {
  const [isOpen, setIsOpen] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [form, updateForm, clearForm] = useForm({
    tittle: '',
    content: '',
  });
  const { editingPost, editError, editPost } = useEditPost(post.id);

  const openEditModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    if (editError) {
      alert('Unable to edit post!');
    }
  }, [editError]);

  useEffect(() => {
    if (form.tittle.length >= 3 && form.content.length >= 3) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [form]);

  const body = (
    <>
      <InputTittle>Tittle</InputTittle>
      <StyledInput
        placeholder={post.title}
        name='tittle'
        onChange={updateForm}
        value={form.tittle}
      />
      <InputTittle>Content</InputTittle>
      <StyledTextarea
        placeholder={post.content}
        name='content'
        onChange={updateForm}
        value={form.content}
        rows={4}
      />
    </>
  );

  const modalText = {
    tittle: 'Edit Item',
    body,
    actionText: 'Save',
    cancelText: 'Cancel',
  };

  const editModalProps = {
    action: async () => {
      await editPost(post.id, form.tittle, form.content);
      clearForm();
      closeModal();
    },
    closeModal: closeModal,
    isLoading: editingPost,
    isOpen: isOpen,
    modalData: modalText,
    disableButton,
    actionButtonColor: '#47B960',
  };
  return { openEditModal, EditModal, editModalProps };
}

const EditModal = (modalProps) => {
  return <ActionModal {...modalProps} />;
};
