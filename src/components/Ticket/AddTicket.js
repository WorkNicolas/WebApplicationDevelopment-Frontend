/**
 * @file AddTicket.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-18
 * @description Add ticket
 * 
 * @returns {AddTicket}
 */

import { useState } from "react";

const AddTicket = () => {
    let [ticketList, setTicketList] = useState([]);

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

export default AddTicket;