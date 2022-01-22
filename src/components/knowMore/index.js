import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Automotive from "../../assets/automotive.png";
import Banking from "../../assets/banking.png";
import Consumer from "../../assets/consumer.png";
import Energy from "../../assets/energy.png";
import Financial from "../../assets/financial.png";
import Gaming from "../../assets/gaming.png";
import Healthcare from "../../assets/healthcare.png";
import Insurance from "../../assets/insurance.png";
import Qsr from "../../assets/qsr.png";
import Retail from "../../assets/retail.png";
import Travel from "../../assets/travel.png";
import "./style.css";
import { KnowMoreConstants } from "../../constants";

/**
 * KnowMore Page component
 * @returns
 */
function KnowMore() {
  return (
    <>
      <p className="pageHeading">
        <span className="orangeText">{KnowMoreConstants.ORANGE_TEXT}</span>
        <br /> {KnowMoreConstants.NORMAL}
      </p>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay={true}
        items={4}
      >
        <div className="item">
          <img src={Automotive} alt="" />
        </div>
        <div className="item">
          <img src={Banking} alt="" />
        </div>
        <div className="item">
          <img src={Consumer} alt="" />
        </div>
        <div className="item">
          <img src={Energy} alt="" />
        </div>
        <div className="item">
          <img src={Financial} alt="" />
        </div>
        <div className="item">
          <img src={Gaming} alt="" />
        </div>
        <div className="item">
          <img src={Healthcare} alt="" />
        </div>
        <div className="item">
          <img src={Insurance} alt="" />
        </div>
        <div className="item">
          <img src={Qsr} alt="" />
        </div>
        <div className="item">
          <img src={Retail} alt="" />
        </div>
        <div className="item">
          <img src={Travel} alt="" />
        </div>
      </OwlCarousel>
    </>
  );
}

export default KnowMore;
