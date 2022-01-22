import ResusablePageComponent from "../shared/reusablePageComponent";
import page1 from "../../assets/page1.png";
import image from "../../assets/image.png";
import "./style.css";

/**
 * Page1 component
 * @returns
 */
function Page1() {
  return (
    <>
      <p className="pageHeading">
        Reap the
        <span className="orangeText">
          {" "}
          benefits of fast, contextual and AI-enabled
        </span>{" "}
        <br />
        insights interface
      </p>
      <ResusablePageComponent leftImage={page1} rightImage={image} />
      <br />
      <br />
      <br />
    </>
  );
}

export default Page1;
