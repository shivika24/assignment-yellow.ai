import ResusablePageComponent from "../shared/reusablePageComponent";
import page2 from "../../assets/page2.png";
import image from "../../assets/image.png";

/**
 * Page2 component
 * @returns
 */
function Page2() {
  return (
    <div className="blueDiv">
      <p className="pageHeading">
        <span className="orangeText"> Top features</span> to boost the quality
        and speed of
        <br /> contextual searches
      </p>
      <ResusablePageComponent leftImage={image} rightImage={page2} />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Page2;
