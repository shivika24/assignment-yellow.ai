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

/**
 * KnowMore Page component
 * @returns
 */
function KnowMore() {
  return (
    <>
      <p className="pageHeading">
        <span className="orangeText">Curious to know more?</span>
        <br /> See what we can do for your industry.
      </p>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay={true}
        items={4}
      >
        <div class="item">
          <img src={Automotive} alt="" />
        </div>
        <div class="item">
          <img src={Banking} alt="" />
        </div>
        <div class="item">
          <img src={Consumer} alt="" />
        </div>
        <div class="item">
          <img src={Energy} alt="" />
        </div>
        <div class="item">
          <img src={Financial} alt="" />
        </div>
        <div class="item">
          <img src={Gaming} alt="" />
        </div>
        <div class="item">
          <img src={Healthcare} alt="" />
        </div>
        <div class="item">
          <img src={Insurance} alt="" />
        </div>
        <div class="item">
          <img src={Qsr} alt="" />
        </div>
        <div class="item">
          <img src={Retail} alt="" />
        </div>
        <div class="item">
          <img src={Travel} alt="" />
        </div>
      </OwlCarousel>
    </>
  );
}

export default KnowMore;
