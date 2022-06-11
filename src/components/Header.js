import { useState } from "react";
import Logo from "../images/square.svg";

const Header = () => {
    const [hover, setHover] = useState(false);

    return (
        <header>
            <img src={Logo} alt="Red Square's logo" className="header--logo"/>
            <nav>
                <a href="#" className="nav--link" onMouseOver={() => (setHover(false))} onMouseLeave={() => (setHover(true) )}>Work <span>&gt;</span></a>
            </nav>
        </header>
    )
}

export default Header;