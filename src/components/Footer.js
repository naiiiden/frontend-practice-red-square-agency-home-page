import { ReactComponent as Nugs } from "../images/Nugs.svg";
import { ReactComponent as Ig } from "../images/IG.svg";
import { ReactComponent as Tw } from "../images/TW.svg";
import { ReactComponent as Li } from "../images/LI.svg";
import Tilt from 'react-parallax-tilt';
import "animate.css";
import WOW from "wow.js";

const Footer = () => {
    new WOW().init();

    return (
        <footer>
            <a id="follow" className="footer--lets--talk--link wow animate__animated animate__fadeInUp" href="mailto:hi@rsq.com">
                <Tilt>
                    <h4>Let's talk</h4>
                    <span>hi@rsq.com</span>
                </Tilt>
            </a>
            <div className="socials--locations--container wow animate__animated animate__fadeInUp">
                <nav className="socials--container">
                    <div className="nugs--container">
                        <div className="plus"><span>+</span></div>
                        <Nugs className="nugs"/>
                    </div>
                    <a href="https://www.instagram.com/redsquareagency" aria-label="Our Instagram"><Ig className="ig"/></a>
                    <a href="https://twitter.com/redsquareagency" aria-label="Our Twitter"><Tw className="tw"/></a>
                    <a href="https://www.linkedin.com/company/red-square-agency/" aria-label="Our LinkedIn"><Li className="li"/></a>
                </nav>
                <div className="locations--container">
                    <h5>Mobile, AL</h5>
                    <h5>Chicago, IL</h5>
                    <h5>Tulsa, OK</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;