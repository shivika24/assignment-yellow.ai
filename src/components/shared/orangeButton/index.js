import "./style.css";

/**
 * OrangeButton common component
 * @returns
 */
function OrangeButton({ styles, btnText, onClick }) {
  return (
    <button style={styles} className="orangeBtn" onClick={onClick}>
      {btnText}
    </button>
  );
}

export default OrangeButton;
