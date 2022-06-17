import { ReactComponent as Nugs } from "../images/Nugs.svg";
import { ReactComponent as Ig } from "../images/IG.svg";
import { ReactComponent as Tw } from "../images/TW.svg";
import { ReactComponent as Li } from "../images/LI.svg";


const Footer = () => {
    return (
        <footer>
            <a className="footer--lets--talk--link" href="">
                <h4>Let's talk</h4>
                <span>hi@rsq.com</span>
            </a>
            <div className="socials--locations--container">
                <nav className="socials--container">
                    <div className="nugs--container">
                        <div className="plus"><span>+</span></div>
                        <Nugs className="nugs"/>
                    </div>
                    <Ig className="ig"/>
                    <Tw className="tw"/>
                    <Li className="li"/>
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