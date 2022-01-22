import "./style.css";

/**
 * ResusablePageComponent component
 * @returns
 */
function ResusablePageComponent({ leftImage, rightImage }) {
  return (
    <div className="row pageRow">
      <div className="col-md-6">
        <img src={leftImage} alt="" className="imgWidth" />
      </div>
      <div className="col-md-6">
        <img src={rightImage} alt="" className="imgWidth" />
      </div>
    </div>
  );
}

export default ResusablePageComponent;
