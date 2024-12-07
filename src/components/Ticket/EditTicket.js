import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, updateTicket } from "../../datasource/api-ticket";  // Assuming you have these functions
import { faListCheck, faScroll, faThermometer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRole, getUserId, isAuthenticated } from "../auth/auth-helper";

const EditTicket = () => {
    const { id } = useParams();  // Get the ticket ID from URL params
    const userId = getUserId();
    const role = getRole();
    const navigate = useNavigate();

    const [ticketData, setTicketData] = useState({
        description: "",
        status: "",
        priority: "",
        updatedAt: Date.now
    });
    const [error, setError] = useState(null);

    // Fetch ticket data by ID
    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const data = await getTicket(id);
                console.log("User ID: " + userId);
                if (data && isAuthenticated) {
                    console.log("User is authenticated");
                    console.log("User Role is: " + role);
                    setTicketData(data);
                }
            } catch (err) {
                setError("Failed to fetch ticket data");
                console.error(err);
            }
        };
        fetchTicket();
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateTicket(id, ticketData);
            if (response && response.success) {
                navigate("/mytickets"); 
            } else {
                setError("Failed to update ticket");
            }
        } catch (err) {
            setError("An error occurred while updating the ticket");
            console.error(err);
        }
    };

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <fieldset className="custom-fieldset">
                    <legend className="custom-legend">Edit Ticket</legend>
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
                    {(role === "admin") && <div className="block">
                        <FontAwesomeIcon icon={faThermometer} />
                        <label htmlFor="status"></label>
                        <select className="select" onChange={handleChange}>
                            <option value="In Progress">In Progress</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>}
                    <div className="block">
                        <FontAwesomeIcon icon={faListCheck} />
                        <label htmlFor="priority"></label>
                        <select className="select" onChange={handleChange}>
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

export default EditTicket;
