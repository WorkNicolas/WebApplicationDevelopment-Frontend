/**
 * @file ListInventory.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-18
<<<<<<< HEAD
 * @description Add ticket
=======
 * @description List Ticket
>>>>>>> origin/master
 * 
 * @returns {ListInventory}
 */

import { useEffect, useState } from "react";
<<<<<<< HEAD
import { list } from "../../datasource/api-ticket";
=======
import { list, remove } from "../../datasource/api-ticket";
import { Link } from "react-router-dom";
>>>>>>> origin/master

const ListInventory = () => {
    let [ticketList, setTicketList] = useState([]);

<<<<<<< HEAD

=======
>>>>>>> origin/master
    useEffect(() => {
        list().then((data) => {
            if (data) {
                setTicketList(data);
            }
<<<<<<< HEAD
        })
    }).catch (err => {
        alert(err.message);
        console.log(err);
    })

    return (
        <>
            <div className="ticket-table">
                <table>
                    <thead>
                        <tr>
                            <th>Request</th>
                            <th>State</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ticketList.map((ticket, i) => {
                        return (
                            <tr key={i}>
                                {console.log(ticket)}
                                <td>{ticket.description || ''}</td>
                                <td>{ticket.status || ''}</td>
                                <td>{ticket.updatedAt || ''}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
=======
        }).catch(err => {
            alert(err.message);
            console.log(err);
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
                    {ticketList.map((ticket, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Link to={`/ticketinfo/${ticket._id}`}>
                                        {ticket.description || ''}
                                    </Link>
                                </td>
                                <td>{ticket.status || ''}</td>
                                <td>{ticket.priority}</td>
                                    <td>{ticket.updatedAt || ''}</td>
                                <td>
                                    <Link to={`/editticket/${ticket._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(ticket._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
>>>>>>> origin/master

export default ListInventory;