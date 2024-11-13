/**
 * @file TicketForm.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the form for creating tickets, and found in the ticket dashboard.
 * 
 * @returns {TicketForm}
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TicketForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
    }
    return (
        <div>
            <h1>Create Tickets</h1>
            <form onSubmit={handleSubmit}>
                <legend>Ticket Form</legend>
                <div class="block">
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
            </form>
        </div>
    );
}

export default TicketForm