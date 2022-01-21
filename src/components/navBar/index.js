import logo from "../../assets/logo.png";
import "./style.css";

/**
 * Navbar component
 * @returns
 */
function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              width="158"
              height="29"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                Why yellow.ai?<i class="fa fa-angle-down"></i>
              </li>
              <li class="nav-item">
                Platform<i class="fa fa-angle-down"></i>
              </li>
              <li class="nav-item">
                Solutions<i class="fa fa-angle-down"></i>
              </li>
              <li class="nav-item">
                Resources<i class="fa fa-angle-down"></i>
              </li>
              <li class="nav-item">
                Company<i class="fa fa-angle-down"></i>
              </li>
            </ul>
            <span class="navbar-text nav-item">
              <button className="demoBtn">Request a demo</button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
