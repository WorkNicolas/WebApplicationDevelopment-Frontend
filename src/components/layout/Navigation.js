/**
 * @file Navigation.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the links to every page of the webapp.
 * 
 * @returns {Navigation}
 */

import { NavLink } from 'react-router-dom';
import Header from './Header';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';

const Navigation = () => {
    return (
        <nav className="my-navbar">
            <Header />
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <NavLink className="link-text" to="/">    
                        <FontAwesomeIcon icon={faHome} size="3x" />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text" to="/about">
                        <FontAwesomeIcon icon={faAddressCard} size="3x" />
                        <span>About Us</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text" to="/mytickets">
                        <FontAwesomeIcon icon={faTicket} size="3x" />
                        <span>Tickets</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text" to="/services">
                        <FontAwesomeIcon icon={faCircleQuestion} size="3x" />
                        <span>F.A.Q.</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text last-item" to="/register">
                        <FontAwesomeIcon icon={faPenToSquare} size="3x" />
                        <span>Register</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text last-item" to="/login">
                        <FontAwesomeIcon icon={faRightToBracket} size="3x" />
                        <span>Login</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;