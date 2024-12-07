import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faBullhorn, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="panel">
            <h1>Welcome to Ticket Master</h1>
            <div className="panel-body">
                <p>
                    Manage your tickets efficiently and stay updated with announcements. Use the options below to get started:
                </p>
                <div className="quick-links">
                    <NavLink to="/mytickets" className="quick-link">
                        <FontAwesomeIcon icon={faTicket} size="2x" />
                        <p>View My Tickets</p>
                    </NavLink>
                    <NavLink to="/announcement" className="quick-link">
                        <FontAwesomeIcon icon={faBullhorn} size="2x" />
                        <p>View Announcements</p>
                    </NavLink>
                    <NavLink to="/services" className="quick-link">
                        <FontAwesomeIcon icon={faCircleQuestion} size="2x" />
                        <p>FAQ</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;
