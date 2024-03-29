import Logo from "../images/square.svg";
import Arrow from "../images/arrow.svg";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Red Square's logo" className="header--logo"/>
            <nav aria-label="Header">
                <a href="https://www.redsquareagency.com/work" className="nav--link">Work<span><img src={Arrow} alt=""/></span></a>
            </nav>
        </header>
    )
}

export default Header;