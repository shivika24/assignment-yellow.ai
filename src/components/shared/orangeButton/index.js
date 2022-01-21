import "./style.css";

/**
 * OrangeButton common component
 * @returns
 */
function OrangeButton({ styles, btnText }) {
  return (
    <button style={styles} className="orangeBtn">
      {btnText}
    </button>
  );
}

export default OrangeButton;
