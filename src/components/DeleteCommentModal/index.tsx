import styles from "./DeleteCommentModal.module.css";

interface DeleteCommentModalProps {
  handleDeleteComment: () => void;
  setIsOpenModal: (state: boolean) => void;
}

export function DeleteCommentModal({
  handleDeleteComment,
  setIsOpenModal,
}: DeleteCommentModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Excluir comentário</h3>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <div className={styles.modalButtons}>
          <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
          <button onClick={handleDeleteComment}>Sim, excluir</button>
        </div>
      </div>
    </div>
  );
}
