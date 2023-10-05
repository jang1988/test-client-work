import React from 'react';
import './deleteModal.scss';

interface DeleteModalProps {
  toggleDeleteModal: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({toggleDeleteModal}) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <p>Вы уверены, что хотите удалить этот приход?</p>
        <button onClick={toggleDeleteModal} className="modal__button modal__button--confirm">Да</button>
        <button onClick={toggleDeleteModal} className="modal__button modal__button--cancel">Отмена</button>
      </div>
    </div>
  );
};

export default DeleteModal;
