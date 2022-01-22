import Footer1 from "../../assets/footer1.png";
import Footer2 from "../../assets/footer2.png";
import Logo from "../../assets/logo.png";
import Facebook from "../../assets/facebook-footer.svg";
import Twitter from "../../assets/twitter-footer.svg";
import Instagram from "../../assets/instagram-footer.svg";
import Youtube from "../../assets/youtube-footer.svg";
import Linkedin from "../../assets/linkedin-footer.svg";
import "./style.css";

/**
 * Footer component
 * @returns 
 */
function Footer() {
  return (
    <div className="row footerRow">
      <div className="col-lg-3 col-md-3 col-sm-12 col-12 customList">
        <div className="footer-box-part">
          <a href="../">
            <img src={Logo} alt="logo" loading="lazy" className="img-fluid" />
          </a>
          <p className="pt-4 pb-3">&copy; 2021 Bitonic Technology Labs Inc</p>
        </div>
        <form
          name="news_subscription_footer"
          id="news_subscription_footer"
          action="https://www2.yellow.ai/l/891611/2022-01-03/7fzh3"
          method="post"
          data-factors-bind="true"
        >
          <div className="footer-box-part pb-3">
            <p className=" footer_get_in_latest">
              <b>Get in on the latest in AI</b>
            </p>

            <button type="submit" className="subscribeBtn">
              Subscribe{" "}
            </button>
            <hr />
          </div>
        </form>

        <div className="footer-box-part footer-border-bottom pt-3 pb-4">
          <img src={Footer1} alt="" className="img-fluid" />
          <hr />
          <img src={Footer2} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 col-12 customList">
        <div className="footer-menu-box">
          <div className="footer-title">Why yellow.ai?</div>
          <ul className="footer-menu">
            <li>
              <a href=".">Conversation CX Automation</a>
            </li>
            <li>
              <a href=".">Customer stories</a>
            </li>
            <li>
              <a href=".">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="footer-menu-box">
          <div className="footer-title">Channels</div>
          <ul className="footer-menu">
            <li>
              <a href="..">Text</a>
            </li>
            <li>
              <a href="..">Voice</a>
            </li>
          </ul>
        </div>

        <div className="footer-menu-box">
          <div className="footer-title">Solutions</div>
          <ul className="footer-menu">
            <li>
              <a href="..">Customer support</a>
            </li>
            <li>
              <a href="..">Marketing automation</a>
            </li>
            <li>
              <a href="..">Conversational commerce</a>
            </li>
            <li>
              <a href="../use-case/hr-automation">HR automation</a>
            </li>
            <li>
              <a href="..">Internal automation</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-12 col-12 customList">
        <div className="footer-menu-box">
          <div className="footer-menu-box">
            <div className="footer-title">Company</div>
            <ul className="footer-menu">
              <li>
                <a href="..">About us</a>
              </li>
              <li>
                <a href="..">Contact us</a>
              </li>
              <li>
                <a href="..">Customer stories</a>
              </li>
              <li>
                <a href="..">Join us</a>
              </li>
              <li>
                <a href="..">Partner with us</a>
              </li>
              <li>
                <a href="..">News</a>
              </li>
              <li>
                <a href="..">Academy</a>
              </li>
              <li>
                <a href="..">Billy - yellow.ai's</a>
              </li>
              <li>
                <a href="..">Virtual assistant</a>
              </li>
            </ul>
          </div>

          <div className="footer-menu-box">
            <div className="footer-title">Resources</div>
            <ul className="footer-menu">
              <li>
                <a href=".." target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="..">E-books</a>
              </li>
              <li>
                <a href="..">Community</a>
              </li>
              <li>
                <a href="..">Academy</a>
              </li>

              <li>
                <a href="..">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-md-2 col-sm-12 col-12 customList">
        <div className="footer-menu-box">
          <div className="footer-menu-box">
            <div className="footer-title">Platform</div>
            <ul className="footer-menu">
              <li>
                <a href="..">NLP</a>
              </li>
              <li>
                <a href="..">Studio</a>
              </li>
              <li>
                <a href="..">Omni channel</a>
              </li>
              <li>
                <a href="..">Inbox</a>
              </li>
              <li>
                <a href="..">Campaign management</a>
              </li>
              <li>
                <a href="..">Marketplace</a>
              </li>
              <li>
                <a href="..">Enterprise-grade</a>
              </li>
              <li>
                <a href="..">Security</a>
              </li>
              <li>
                <a href="..">Integrations</a>
              </li>
              <li>
                <a href="..">Analytics</a>
              </li>
              <li>
                <a href="..">Insights engine</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-2 col-sm-12 col-12 customList">
        <div className="footer-menu-box">
          <div className="footer-title">Industries</div>
          <ul className="footer-menu">
            <li>
              <a href="..">Automotive</a>
            </li>
            <li>
              <a href="..">Advertising</a>
            </li>
            <li>
              <a href="..">Energy</a>
            </li>
            <li>
              <a href="..">Education</a>
            </li>
            <li>
              <a href="..">Banking</a>
            </li>
            <li>
              <a href="..">Insurance</a>
            </li>
            <li>
              <a href="..">Food & Beverages</a>
            </li>
            <li>
              <a href="..">Consumer goods</a>
            </li>
            <li>
              <a href="..">E-commerce</a>
            </li>
            <li>
              <a href="..">Retail</a>
            </li>
            <li>
              <a href="..">Gaming</a>
            </li>
            <li>
              <a href="..">Healthcare</a>
            </li>
            <li>
              <a href="..">Hospitality</a>
            </li>
            <li>
              <a href="..">Real estate</a>
            </li>
            <li>
              <a href="..">Telecom</a>
            </li>
            <li>
              <a href="..">QSRs</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          Terms . Policy . Sitemap
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <p>Formerly known as Yellow Messenger</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <img src={Facebook} alt="" className="logoFooter" />
          <img src={Twitter} alt="" className="logoFooter" />
          <img src={Instagram} alt="" className="logoFooter" />
          <img src={Youtube} alt="" className="logoFooter" />
          <img src={Linkedin} alt="" className="logoFooter" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
