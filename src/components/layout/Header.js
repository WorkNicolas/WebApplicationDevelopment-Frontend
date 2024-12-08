/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
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