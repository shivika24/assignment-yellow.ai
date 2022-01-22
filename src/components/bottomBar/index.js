import constants from "../../constants";
import "./style.css";

/**
 * BottomBar component
 * @returns
 */
function BottomBar() {
  return (
    <div className="row bottomBar">
      <div className="col-md-4 col-12">
        <p className="percentageClass">{constants.PERCENT_15}</p>
        <p className="informationText">{constants.INCREASE_IN_PRODUCTIVITY}</p>
      </div>
      <div className="col-md-4 col-12">
        <p className="percentageClass">{constants.PERCENT_30}</p>
        <p className="informationText">{constants.COST_REDUCTION}</p>
      </div>
      <div className="col-md-4 col-12">
        <p className="percentageClass">{constants.PLUS_100}</p>
        <p className="informationText">{constants.GLOBAL_CUSTOMERS}</p>
      </div>
    </div>
  );
}

export default BottomBar;
