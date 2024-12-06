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
import { list, remove } from "../../datasource/api-ticket";
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

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            try {
                await remove(id);
                setTicketList((prev) => prev.filter((ticket) => ticket._id !== id));
                alert("Ticket deleted successfully");
            } catch (err) {
                alert(err.message);
                console.error(err);
            }
        }
    };

    const filteredTickets = ticketList.filter((ticket) => {
        if (filter === "all") return true;
        if (filter === "open") return ticket.status === "NEW" || ticket.status === "progress";
        return ticket.status === filter;
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
                        <th className="sixth-item">Delete</th>
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
                                    <button>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(ticket._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListInventory;