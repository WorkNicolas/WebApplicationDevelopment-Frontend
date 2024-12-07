import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-ticket";  // Use the 'create' function from api-ticket.js
import { faListCheck, faScroll, faThermometer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUserId, getUsername, isAuthenticated } from "../auth/auth-helper";

const TicketForm = () => {
    const navigate = useNavigate();
    const userId = getUserId();
    const username = getUsername();
    const [ticketData, setTicketData] = useState({
        userId: userId,
        description: "",
        status: "NEW",
        priority: "Medium"
    });
    const [error, setError] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData({
            ...ticketData,
            [name]: value,
        });
    };

    // Handle form submission (creating a new ticket)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', ticketData);
        create(ticketData).then((response) => {
            if(response && response.success){
                setError(null);
                navigate('/mytickets');
            } else {
                setError(response.message);
            }
        }).catch((error) => {
            setError(error.message);
        });
    };

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <fieldset className="custom-fieldset">
                    <legend className="custom-legend">Create New Ticket</legend>
                    <div className="block">
                        <FontAwesomeIcon icon={faScroll} />
                        <label htmlFor="description"></label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={ticketData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faThermometer} />
                        <label htmlFor="status"></label>
                        <select
                            id="status"
                            name="status"
                            className="select"
                            value={ticketData.status}
                            onChange={handleChange}
                        >
                            <option value="In Progress">In Progress</option>
                        </select>
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faListCheck} />
                        <label htmlFor="priority"></label>
                        <select
                            id="priority"
                            name="priority"
                            className="select"
                            value={ticketData.priority}
                            onChange={handleChange}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
};

export default TicketForm;
