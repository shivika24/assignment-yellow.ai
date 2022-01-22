import "./style.css";

/**
 * WhiteButton common component
 * @returns
 */
function WhiteButton({ styles, btnText, onClick }) {
  return (
    <button style={styles} className="whiteBtn" onClick={onClick}>
      {btnText}
    </button>
  );
}

export default WhiteButton;
