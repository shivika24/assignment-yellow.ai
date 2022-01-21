import "./style.css";

/**
 * ResusablePageComponent component
 * @returns
 */
function ResusablePageComponent({ leftImage, rightImage }) {
  return (
    <div className="row pageRow">
      <div className="col-md-6">
        <img src={leftImage} alt="" />
      </div>
      <div className="col-md-6">
        <img src={rightImage} alt="" />
      </div>
    </div>
  );
}

export default ResusablePageComponent;
