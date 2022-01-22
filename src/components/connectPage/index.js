import GoogleDrive from "../../assets/google-drive.png";
import Confluence from "../../assets/confluence.png";
import AWS from "../../assets/aws.png";
import MicrosoftSharePoint from "../../assets/microsoft-sharepoint.png";
import Now from "../../assets/now.png";
import "./style.css";
import constants from "../../constants";
/**
 * Connect Page component
 * @returns
 */
function ConnectPage() {
  return (
    <div>
      <p className="pageHeading">
        Connect and prosper-
        <br />{" "}
        <span className="orangeText">
          native connect`ors for faster deployment
        </span>
      </p>
      <div className="row connectRow">
        <div className="col-md-3 col-12">
          <div className="connectBox">
            <img src={GoogleDrive} alt="" className="imagesLogo" />
            <p className="serviceTitle">{constants.GOOGLE_DRIVE}</p>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="connectBox">
            <img src={Confluence} alt="" className="imagesLogo" />
            <p className="serviceTitle">{constants.CONFLUENCE}</p>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="connectBox">
            <img src={AWS} alt="" className="imagesLogo" />
            <p className="serviceTitle">{constants.AWS}</p>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <div className="connectBox">
            <img src={MicrosoftSharePoint} alt="" className="imagesLogo" />
            <p className="serviceTitle">{constants.MICROSOFT_SHAREPOINT}</p>
          </div>
        </div>
      </div>
      <br />
      <div className="row connectRow">
        <div className="col-md-3 col-12">
          <div className="connectBox">
            <img src={Now} alt="" className="imagesLogo" />
            <p className="serviceTitle">{constants.SERVICE_NOW}</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ConnectPage;
