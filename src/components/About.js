/**
 * @file About.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains information about the help desk site.
 * 
 * @returns {About}
 */

import React, { useState } from "react";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const groupLogo = "../../COMP229.006_Group6_Project logo.jpg"; // Replace with your team photo URL

const About = () => {

    const [formData, setFormData] = useState({
        recipient: "support@ticketmasterdevelopment.ca", // Default recipient
        subject: "Online Feedback",
        body: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSendEmail = (e) => {
        e.preventDefault();
        const { recipient, subject, body } = formData;
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink; // Opens the email client
      };

  return (
    <>
    <div className="panel">
            <h1>About Us</h1>
    </div>
        <div className="panel-body">
          <h2>Welcome to the Ticket Master</h2>
          <img src={groupLogo} alt="Group Logo" style={{float:'right',width:'200px'}} />
          <p>
            We are a dynamic group of students from COMP 229 Web Application Development, 
            Section 006 in Centennial College Fall 2024 batch, working together as 
            Group 6. Our team selected option 3 as our Final Team Project, we are going to develop a professional Help Desk Site.
          </p>
          <p>
            Our project focuses on creating efficient, user-friendly applications that solve real-world problems. 
            With a shared vision of success, we leverage our diverse skills and experiences to achieve our goals.
          </p>
          <h2>Features</h2>
          <p>The system will include robust user management and site security features. Users will be able to register by filling out a form that captures their profile information, including username, password, email address, and user type. This information will be securely stored in a MongoDB database. Once registered, users can log in, log out, and modify their profiles. Site security measures will restrict non-registered users from performing actions such as creating, editing, or deleting ticket records, changing ticket statuses, posting comments, or viewing the ticket log.
            </p>
            <p>
            After successfully registering and logging in, users will have access to a Ticket Dashboard. This dashboard will display a list of all open tickets in a clickable format. Users will also have the option to create new tickets directly from the dashboard. Closed tickets will initially be hidden but can be viewed by selecting an option to display all tickets, both open and closed.
            </p>
            <p>
            When creating a new ticket, users will fill out a form requiring fields such as Ticket Description, Ticket Priority, Customer Information, and additional details. Each ticket will be assigned a unique ticket record number, formatted using the ticket's creation date. This number serves as a reference for customers. Tickets will also include descriptions, status fields (initially set to "NEW"), and an iteration history capturing the username, date, time, and comments for every status change or modification. This ensures detailed ticket tracking and provides an audit trail.
            </p>
            <p>
            Ticket management is primarily handled by ADMIN users, who are responsible for working on the tickets. Admins can update the status field of a ticket by selecting it from the dashboard and choosing the appropriate status, such as "In Progress," "Dispatched," or "Closed." Admins must also enter a comment for each status change in the ticket's iteration log. Once a ticket's status is set to "CLOSED," no further modifications can be made. Certain fields, such as the Ticket Record Number, Customer Name, and Ticket Duration, will be non-editable and displayed as greyed-out. Additionally, each active ticket must include a Ticket Resolution Field, which must be filled out before closing the ticket. Tickets cannot be deleted by either users or admins; instead, their status can be changed to "Cancelled."
          </p>
          <h2>Team Members</h2>
          <ul>
            <li>Dou, Fang <i>(Team Lead, Developer)</i></li>
            <li>HUI, LIT TUNG <i>(Lead Software Engineer)</i></li>
            <li>Mendoza, Carl Nicolas <i>(Project Manager, Developer)</i></li>
            <li>To, Cheuk Man Edmond <i>(Developer)</i></li>
          </ul>

          <h2>Contact Us</h2>

          <p>Please feel free to contact us via the below form.</p>

          <div className="mt-3">
            <form onSubmit={handleSendEmail}>
                <fieldset className="custom-fieldset">
                    <div className="block">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <label htmlFor="username"></label>
                        <input type="text" id="username" name="username" placeholder="Name" required />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faPhone} />
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label htmlFor="email"></label>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faMessage} />
                        <label htmlFor="message"></label>
                        <textarea id="message" name="message" placeholder="Message" required className="message"></textarea>
                    </div>
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
        </div>
        </>
  );
};

export default About;
