/**
 * @file MyTickets.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the ticket dashboard.
 * 
 * @returns {MyTickets}
 */

import AddTicket from "./Ticket/AddTicket";

const MyTickets = () => {
    return (
        <>
            <h1>Tickets Dashboard</h1>
            <div className="panel">
                <h2>My Tickets</h2>
            </div>
            <div className="panel-body">
                <label>View</label>
                <select name="filter_status" id="filter_status">
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                    <option value="new">NEW</option>
                    <option value="progress">In Progress</option>
                    <option value="cancelled">Cancelled</option>
                </select>
                <AddTicket />

            </div>
        </>
    );
}

export default MyTickets;