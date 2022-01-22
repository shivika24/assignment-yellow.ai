import { useState } from "react";
import logo from "../../assets/logo.png";
import constants from "../../constants";
import ModalComponent from "../shared/modal";
import SignInForm from "../signInForm";
import "./style.css";

/**
 * Navbar component
 * @returns
 */
function NavBar() {
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
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid align-items-baseline">
          <a className="navbar-brand" href="..">
            <img
              src={logo}
              alt="logo"
              width="158"
              height="29"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-wrap flex-md-nowrap"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav flex-wrap">
              <li className="nav-item">
                Why yellow.ai?<i className="fa fa-angle-down"></i>
              </li>
              <li className="nav-item">
                Platform<i className="fa fa-angle-down"></i>
              </li>
              <li className="nav-item">
                Solutions<i className="fa fa-angle-down"></i>
              </li>
              <li className="nav-item">
                Resources<i className="fa fa-angle-down"></i>
              </li>
              <li className="nav-item">
                Company<i className="fa fa-angle-down"></i>
              </li>
            </ul>
            <span className="navbar-text nav-item">
              <button className="demoBtn" onClick={() => signInUser()}>
                {constants.REQUEST_A_DEMO}
              </button>
            </span>
          </div>
        </div>
      </nav>
      {/* to display modal for signIn user */}
      {displayModal && (
        <ModalComponent
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

export default NavBar;
