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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons/faCircleQuestion';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons/faSignOut';

// api
import { clearJWT,isAuthenticated } from '../auth/auth-helper';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { logout ,login} from '../../redux/userSlice';

const Navigation = () => {
    const isLogin = useSelector((state) => state.user.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(isAuthenticated()) {
            dispatch(login());
        }
    }, []);

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
                    <NavLink className="link-text" to="/announcement">
                        <FontAwesomeIcon icon={faBullhorn} size="3x" />
                        <span>Announcement</span>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="link-text" to="/services">
                        <FontAwesomeIcon icon={faCircleQuestion} size="3x" />
                        <span>F.A.Q.</span>
                    </NavLink>
                </li>
                {/* <li className="navbar-item">
                    <NavLink className="link-text last-item" to="/register">
                        <FontAwesomeIcon icon={faPenToSquare} size="3x" />
                        <span>Register</span>
                    </NavLink>
                </li> */}
                {
                    !isLogin && (
                        <li className="navbar-item">
                            <NavLink className="link-text last-item" to="/login">
                                <FontAwesomeIcon icon={faRightToBracket} size="3x" />
                                <span>Login</span>
                            </NavLink>
                        </li>
                    )
                }
                {
                    isLogin && (
                        <li className="navbar-item"
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                clearJWT();
                                dispatch(logout());
                                navigate('/');
                            }}
                        >

                            <span className="link-text last-item">
                                <FontAwesomeIcon icon={faSignOut} size="3x" />
                                <span>Logout</span>
                            </span>
                        </li>
                    )
                }
            </ul>
        </nav>
    );
}

export default Navigation;