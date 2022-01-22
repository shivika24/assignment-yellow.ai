import Modal from "react-modal";

const customStyles = {
  content: {
    height: 'fit-content',
    width: "50%",
    left: "25%",
  },
  overlay: {
    zIndex: 1,
  },
};

/**
 * modal component
 * @returns
 */
function ModalComponent({ children, isModalOpen, setIsModalOpen }) {
  Modal.setAppElement('#root');
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsModalOpen(false)}
      style={customStyles}
    >
      {children}
    </Modal>
  );
}
export default ModalComponent;
