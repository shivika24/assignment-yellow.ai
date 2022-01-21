import constants from "../../../constants";
import OrangeButton from "../../shared/orangeButton";
import "../style.css";

/**
 * LeftSide component
 * @returns
 */
function LeftSide() {
  return (
    <>
      <p className="headingMain">
        Convert unstructured data to{" "}
        <span className="orangeText">contextual and searchable insights</span>
      </p>
      <p className="textMain">
        Turn 100’s of documents worth of unstructured data into a fine-tuned
        structured and searchable set in a fast, easy and comprehensive way –
        with our AI and ML-powered Insights Interface!
      </p>
      <OrangeButton
        btnText={constants.GET_A_DEMO}
        styles={{
          width: "167px",
          height: "60px",
          marginTop: "4%",
        }}
      />
    </>
  );
}

export default LeftSide;
