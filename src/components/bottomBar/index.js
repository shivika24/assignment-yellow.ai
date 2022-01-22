import "./style.css";

/**
 * BottomBar component
 * @returns
 */
function BottomBar() {
  return (
    <div className="row bottomBar">
      <div className="col-md-4 col-12">
        <p className="percentageClass">15%</p>
        <p className="informationText">Increase in productivity</p>
      </div>
      <div className="col-md-4 col-12">
        <p className="percentageClass">30%</p>
        <p className="informationText">Cost reduction</p>
      </div>
      <div className="col-md-4 col-12">
        <p className="percentageClass">100+</p>
        <p className="informationText">Global enterprise customers</p>
      </div>
    </div>
  );
}

export default BottomBar;
