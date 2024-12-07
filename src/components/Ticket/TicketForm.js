import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-ticket";  // Use the 'create' function from api-ticket.js
import { faListCheck, faScroll, faThermometer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TicketForm = () => {
    const navigate = useNavigate();

    const [ticketData, setTicketData] = useState({
        userId: "674271e84091a6bd09beac38",
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
