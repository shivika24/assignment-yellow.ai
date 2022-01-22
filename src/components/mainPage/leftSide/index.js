import { useState } from "react";
import constants, { MainPageLeft } from "../../../constants";
import Modal from "../../shared/modal";
import OrangeButton from "../../shared/orangeButton";
import SignInForm from "../../signInForm";
import "../style.css";

/**
 * LeftSide component
 * @returns
 */
function LeftSide() {
  const [displayModal, setDisplayModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  /**
   * to open display modal
   */
  const signInUser = () => {
    setDisplayModal(true);
    setIsModalOpen(true);
  };
  return (
    <>
      <p className="headingMain">
        {MainPageLeft.NORMAL}
        <span className="orangeText">{MainPageLeft.ORANGE_TEXT}</span>
      </p>
      <p className="textMain">{MainPageLeft.DESCRIPTION}</p>
      <OrangeButton
        btnText={constants.GET_A_DEMO}
        onClick={signInUser}
        styles={{
          width: "167px",
          height: "60px",
          marginTop: "4%",
        }}
      />

      {/* to display modal for signIn user */}
      {displayModal && (
        <Modal
          children={
            <SignInForm
              setDisplayModal={setDisplayModal}
              setIsModalOpen={setIsModalOpen}
            />
          }
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default LeftSide;
