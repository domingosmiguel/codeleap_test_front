import ActionModal from '@/components/ActionModal';
import { useCallback, useEffect, useState } from 'react';
import useDeletePost from '../api/useDeletePost';

export default function useModalDelete(postId) {
  const [isOpen, setIsOpen] = useState(false);
  const { deletingPost, deleteError, deletePost } = useDeletePost();

  const openDeleteModal = useCallback(() => setIsOpen(true), [setIsOpen]);
  const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

  useEffect(() => {
    if (deleteError) {
      alert('Unable to delete post!');
      closeModal();
    }
  }, [deleteError]); // eslint-disable-line react-hooks/exhaustive-deps

  const modalText = {
    tittle: 'Delete post',
    body: 'Are you sure you want to delete this item? This action cannot be undone.',
    btn1Txt: 'Delete',
    btn2Txt: 'Cancel',
  };

  const deleteModalProps = {
    action: async () => {
      await deletePost(postId);
      closeModal();
    },
    closeModal: closeModal,
    isLoading: deletingPost,
    isOpen: isOpen,
    modalData: modalText,
    actionButtonColor: '#FF5151',
  };
  return { openDeleteModal, DeleteModal, deleteModalProps };
}

const DeleteModal = (modalProps) => {
  return <ActionModal {...modalProps} />;
};
