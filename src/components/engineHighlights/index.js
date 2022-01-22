import Award1 from "../../assets/award1.png";
import Award2 from "../../assets/award2.png";
import Award3 from "../../assets/award3.png";
import constants from "../../constants";
import "./style.css";

/**
 * EngineHighlights component
 * @returns
 */
function EngineHighlights() {
  return (
    <div className="blueDiv">
      <p className="pageHeading">
        Under the hood -<span className="orangeText"> engine highlights</span>
      </p>
      <div className="row customRow">
        <div className="col-md-4 col-12">
          <div className="card">
            <img src={Award1} className="card-img-top cardImage" alt="" />
            <div className="card-body">
              <h5 className="card-title">{constants.AWARD1_HEADING}</h5>
              <p className="card-text">{constants.AWARD1_DESCRIPTION}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card">
            <img src={Award3} className="card-img-top cardImage" alt="" />
            <div className="card-body">
              <h5 className="card-title">{constants.AWARD2_HEADING}</h5>
              <p className="card-text">{constants.AWARD2_DESCRIPTION}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card">
            <img src={Award2} className="card-img-top cardImage" alt="" />
            <div className="card-body">
              <h5 className="card-title">{constants.AWARD3_HEADING}</h5>
              <p className="card-text">{constants.AWARD3_DESCRIPTION}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EngineHighlights;
