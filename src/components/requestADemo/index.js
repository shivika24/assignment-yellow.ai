import { useState } from "react";
import Modal from "../shared/modal";
import constants from "../../constants";
import WhiteButton from "../shared/whiteButton";
import SignInForm from "../signInForm";
import "./style.css";
/**
 * RequestADemo component
 * @returns
 */
function RequestADemo() {
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
      <div className="orangeDiv">
        <p className="signUpHeading">{constants.SIGN_UP}</p>
        <br />
        <WhiteButton btnText={constants.REQUEST_A_DEMO} onClick={signInUser} />
      </div>
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

export default RequestADemo;
