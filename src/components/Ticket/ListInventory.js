/**
 * @file ListInventory.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-18
 * @description Add ticket
 * 
 * @returns {ListInventory}
 */

import { useEffect, useState } from "react";
import { list } from "../../datasource/api-ticket";

const ListInventory = () => {
    let [ticketList, setTicketList] = useState([]);


    useEffect(() => {
        list().then((data) => {
            if (data) {
                setTicketList(data);
            }
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

export default ListInventory;