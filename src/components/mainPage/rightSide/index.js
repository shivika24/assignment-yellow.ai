import ReactPlayer from "react-player";
import "../style.css";

/**
 * RightSide component
 * @returns
 */
function RightSide() {
  return (
    <div className="wrapperVideoDiv">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cdJxmqukAJE"
        width="580px"
      />
    </div>
  );
}

export default RightSide;
