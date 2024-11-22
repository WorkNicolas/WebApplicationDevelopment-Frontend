/**
 * @file Header.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the logo and company name of the webapp.
 * 
 * @returns {Header}
 */
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