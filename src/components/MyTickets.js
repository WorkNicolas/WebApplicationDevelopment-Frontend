/**
 * @file MyTickets.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the ticket dashboard.
 * 
 * @returns {MyTickets}
 */

import React, { useState } from "react"; // Import useState from React
import ListInventory from "./Ticket/ListInventory";

const MyTickets = () => {
    const [filter, setFilter] = useState("open"); // Default filter state

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <>
            <h1>Tickets Dashboard</h1>
            <div className="panel">
                <h2>My Tickets</h2>
            </div>
            <div className="panel-body">
                <label>View</label>
                <select
                    name="filter_status"
                    id="filter_status"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <option value="all">All</option>
                    <option value="open" selected="selected">Open</option>
                    <option value="closed">Closed</option>
                </select>
                <ListInventory filter={filter} />
            </div>
        </>
    );
};

export default MyTickets;
