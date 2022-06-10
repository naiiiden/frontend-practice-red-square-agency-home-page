import Logo from "../images/square.svg";

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Red Square's logo" className="header--logo"/>
            <nav>
                <a href="#" className="nav--link">Work <span>&gt;</span></a>
            </nav>
        </header>
    )
}

export default Header;