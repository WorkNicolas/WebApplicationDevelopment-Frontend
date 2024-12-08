import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, updateTicket } from "../../datasource/api-ticket";
import { faListCheck, faScroll, faThermometer, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRole, getUsername, isAuthenticated } from "../auth/auth-helper";
import { create as createComment } from "../../datasource/api-ticketiteration";

const EditTicket = () => {
    const { id } = useParams();  // Get the ticket ID from URL params
    const navigate = useNavigate();
    const username = getUsername();
    const role = getRole();
    const [newComment, setNewComment] = useState("");
    const [ticketData, setTicketData] = useState({
        description: "",
        status: "",
        priority: "",
        updatedAt: Date.now
    });
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const isDisabled = newComment.trim() === '';
    const [initialTicketData, setInitialTicketData] = useState({});
    const [error, setError] = useState(null);

    const updateTicketInfo = async () => {
        try {
          getTicket(id).then((data) => {
            if (data) {
              setTicketData(data[0]);
              setStatus(data[0]?.status);
              setPriority(data[0]?.priority);
            }
          });
        } catch (err) {
          console.log(err);
        }
      };

    // Fetch ticket data by ID
    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const data = await getTicket(id);
                if (data) {
                    setTicketData({
                        description: data[0]?.description,
                        status: data[0]?.status,
                        priority: data[0]?.priority,
                    });
                    setInitialTicketData({
                        description: data[0]?.description,
                        status: data[0]?.status,
                        priority: data[0]?.priority,
                    });
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

    const submitComment = async (product) => {
        try {
          const response = await createComment(product);
    
          if (!response.success) {
            alert(response.message);
            return;
          }
    
          setNewComment("");
          updateTicketInfo();
        } catch (err) {
          console.log(err);
        }
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
                        <select className="select" onChange={handleChange} name="status" value={ticketData.status}>
                            <option value="In Progress">In Progress</option>
                            <option value="Dispatched">Dispatched</option>
                            {/* <option value="Closed">Closed</option> */}
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>}
                    {(role === "admin") && <div className="block">
                        <FontAwesomeIcon icon={faComment} />
                        <input
                            type="text"
                            placeholder="Leave a comment"
                            className="w-75 p-2"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                    </div>}
                    <div className="block">
                        <FontAwesomeIcon icon={faListCheck} />
                        <label htmlFor="priority"></label>
                        <select className="select" onChange={handleChange} name="priority" value={ticketData.priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </fieldset>
                <input 
                    type="submit" 
                    value="Submit"
                    disabled={isDisabled} 
                    onClick={() =>
                    submitComment({
                        ticketID: id,
                        comment: newComment,
                        username: username,
                    })
                    }
                    />
                <input type="button" value="Reset" onClick={() => setTicketData(initialTicketData)} />
            </form>
        </div>
    );
};

export default EditTicket;
