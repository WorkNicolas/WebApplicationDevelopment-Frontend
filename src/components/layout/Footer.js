<<<<<<< HEAD
/**
 * @file Header.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the logo and company name of the webapp.
 * 
 * @returns {Footer}
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

const Footer = () => {
    return (
        <footer>
            <p>
                <a href="https://www.linkedin.com/in/worknicolas/" >
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn Profile Link" />
                </a>
                <a href="https://twitter.com/qcnvmendoza/" >
                    <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter Profile Link" />
                </a>
                <a href="https://github.com/WorkNicolas" >
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub Profile Link" />
                </a>
                <a href="mailto:carl.nicolas.v.mendoza@gmail.com" >
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Mail to my GMail" />
                </a>
            </p>
            <p><FontAwesomeIcon icon={faPhone} /> tel: <a href="tel:+14377332225">437-733-2225</a> | <FontAwesomeIcon icon={faEnvelope} /> email: <a href="mailto:carl.nicolas.v.mendoza@gmail.com" >tm@ticket.master.ca</a></p>
            <p>Copyright &copy; 2024 Ticket Master - Licensed under GPLv3.0</p>
        </footer>
    );
}

=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

const Footer = () => {
    return (
        <footer>
            <p>
                <a href="https://www.linkedin.com/in/TicketMaster/" >
                    <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn Profile Link" />
                </a>
                <a href="https://twitter.com/TicketMaster/" >
                    <img src="https://skillicons.dev/icons?i=twitter" alt="Twitter Profile Link" />
                </a>
                <a href="https://github.com/TicketMaster" >
                    <img src="https://skillicons.dev/icons?i=github" alt="GitHub Profile Link" />
                </a>
                <a href="mailto:tm@ticket.master.ca" >
                    <img src="https://skillicons.dev/icons?i=gmail" alt="Mail to my GMail" />
                </a>
            </p>
            <p><FontAwesomeIcon icon={faPhone} /> tel: <a href="tel:+14377332225">437-733-2225</a> | <FontAwesomeIcon icon={faEnvelope} /> email: <a href="mailto:tm@ticket.master.ca" >tm@ticket.master.ca</a></p>
            <p>Copyright &copy; 2024 Ticket Master - Licensed under MIT License</p>
        </footer>
    );
}

>>>>>>> origin/master
export default Footer;