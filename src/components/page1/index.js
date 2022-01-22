import ResusablePageComponent from "../shared/reusablePageComponent";
import page1 from "../../assets/page1.png";
import image from "../../assets/image.png";
import "./style.css";
import { Page1Constants } from "../../constants";

/**
 * Page1 component
 * @returns
 */
function Page1() {
  return (
    <>
      <p className="pageHeading">
        {Page1Constants.NORMAL_1}
        <span className="orangeText"> {Page1Constants.ORANGE_TEXT}</span> <br />
        {Page1Constants.NORMAL_2}
      </p>
      <ResusablePageComponent leftImage={page1} rightImage={image} />
      <br />
      <br />
      <br />
    </>
  );
}

export default Page1;
