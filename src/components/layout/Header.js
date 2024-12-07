import logo from '../../logo.png';

const Header = () => {
    return (
        <header>
            <span className="link-text">
                <img src={logo} height="64px" alt="TIcket Master Logo"/>
                <span className="h1" style={{fontSize: "22px"}}>Ticket Master</span>
            </span>
        </header>
    );
}

export default Header;