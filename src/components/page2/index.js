import ResusablePageComponent from "../shared/reusablePageComponent";
import page2 from "../../assets/page2.png";
import image from "../../assets/image.png";
import { Page2Constants } from "../../constants";

/**
 * Page2 component
 * @returns
 */
function Page2() {
  return (
    <div className="blueDiv">
      <p className="pageHeading">
        <span className="orangeText"> {Page2Constants.ORANGE_TEXT}</span>{" "}
        {Page2Constants.NORMAL_1}
        <br /> {Page2Constants.NORMAL_2}
      </p>
      <ResusablePageComponent leftImage={image} rightImage={page2} />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Page2;
