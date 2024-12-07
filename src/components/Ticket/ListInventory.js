/**
 * @file ListInventory.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-18
 * @description List Ticket
 * 
 * @returns {ListInventory}
 */

import { useEffect, useState } from "react";
import { list, remove, cancel } from "../../datasource/api-ticket";
import { Link } from "react-router-dom";

const ListInventory = ({ filter }) => {
    const [ticketList, setTicketList] = useState([]);

    useEffect(() => {
        list()
            .then((data) => {
                if (data) {
                    setTicketList(data);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.error(err);
            });
    }, []);

    const handleCancel = async (id) => {
        if (window.confirm("Are you sure you want to cancel this ticket?")) {
            try {
                const response = await cancel(id);
                alert(response.message);
            } catch (err) {
                alert(err.message);
                console.error(err);
            }
        }
    }

    const filteredTickets = ticketList.filter((ticket) => {
        if (filter === "all") return true;
        else if (filter === "open") return ticket.status === "NEW" || ticket.status === "In Progress" || ticket.status === "Dispatched";
        else if (filter === "closed") return ticket.status === "Closed";
        else if (filter === "cancelled") return ticket.status === "Cancelled";
        return ticket.status === filter;
    });

    return (
        <>
            <button className="addTicket borderRadius">
                <Link to="/ticketform">Add Ticket</Link>
            </button>
            <table>
                <thead>
                    <tr>
                        <th className="first-item">Request</th>
                        <th className="second-item">State</th>
                        <th className="fourth-item">Priority</th>
                        <th className="third-item">Updated</th>
                        <th className="fifth-item">Edit</th>
                        <th className="sixth-item">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTickets.map((ticket) => (
                        <tr key={ticket._id}>
                            <td>
                            <Link to={{ pathname: `/ticketinfo/${ticket._id}`, state: { ticket } }}>
                                {ticket.description || "No description"}
                            </Link>


                            </td>
                            <td>{ticket.status || ""}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.updatedAt || ""}</td>
                            <td>
                                <Link to={`/editticket/${ticket._id}`}>
                                    <button className="borderRadius" disabled={ticket.status === "Cancelled"}>Edit</button>
                                </Link>
                            </td>
                            <td>
                            <button 
                                className="borderRadius"
                                onClick={() => handleCancel(ticket._id)} 
                                disabled={ticket.status === "Cancelled"}
                            >
                                Cancel
                            </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListInventory;