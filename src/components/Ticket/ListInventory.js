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
import { list } from "../../datasource/api-ticket";
import { Link } from "react-router-dom";
import { cancel } from "../../datasource/api-ticket";
import { getUserId, getRole } from "../auth/auth-helper";

const ListInventory = ({ filter }) => {
    const [ticketList, setTicketList] = useState([]);
    const userId = getUserId();
    const role = getRole();
    
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
    }, [ticketList]);

    const handleCancel = async (id) => {
        if (window.confirm("Are you sure you want to cancel this ticket?")) {
            try {
                const response = await cancel(id);
                alert(response.message);
                window.location.reload();
            } catch (err) {
                alert(err.message);
                console.error(err);
            }
        }
    }

    const filteredTickets = ticketList.filter((ticket) => {
        if (role === "admin") {
            if (filter === "all") return true;
            else if (filter === "open") return ticket.status === "NEW" || ticket.status === "In Progress" || ticket.status === "Dispatched";
            else if (filter === "closed") return ticket.status === "Closed" || ticket.status === "Cancelled";
            return ticket.status === filter;
        }
        if (ticket.userId === userId) {
            if (filter === "all") return true;
            else if (filter === "open") return ticket.status === "NEW" || ticket.status === "In Progress" || ticket.status === "Dispatched";
            else if (filter === "closed") return ticket.status === "Closed" || ticket.status === "Cancelled";
            return ticket.status === filter;
        }
        return false;
    });

    return (
        <>
            <button className="addTicket">
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
                                <Link to={`/ticketinfo/${ticket._id}`}>
                                    {ticket.description || ""}
                                </Link>
                            </td>
                            <td>{ticket.status || ""}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.updatedAt || ""}</td>
                            <td>
                                <Link to={`/editticket/${ticket._id}`}>
                                    <button
                                        disabled={ticket.status === "Cancelled" || ticket.status === "Closed"}
                                    >
                                        Edit
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button 
                                    onClick={() => handleCancel(ticket._id)} 
                                    disabled={ticket.status === "Cancelled" || ticket.status === "Closed"}
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