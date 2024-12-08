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
                <a href="https://x.com/TicketMaster/" >
                    <img src="https://skillicons.dev/icons?i=twitter" alt="X Profile Link" />
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

export default Footer;