import Modal from "react-modal";

const customStyles = {
  content: {
    height: "60%",
    width: "50%",
    left: '25%',
  },
};

/**
 * modal component
 * @returns
 */
function ModalComponent({ children, isModalOpen, setIsModalOpen }) {
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
