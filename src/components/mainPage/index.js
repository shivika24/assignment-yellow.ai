import LeftSide from "./leftSide";
import RightSide from "./rightSide";

/**
 * MainPage component
 * @returns
 */
function MainPage() {
  return (
    <div className="row customRow">
      <div className="col-md-6 col-12">
        <LeftSide />
      </div>
      <div className="col-md-6 col-12">
        <RightSide />
      </div>
    </div>
  );
}

export default MainPage;
