/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
*/
import { getToken } from "../components/auth/auth-helper";
let apiURL = process.env.REACT_APP_APIURL;

const list = async (userID) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/list/' + userID, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json();
    } catch (err) {
        console.log(err)
    }
};

const create = async (ticket) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/create/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(ticket)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

const remove = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
};

// Fetch a single ticket by ID
const getTicket = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/get/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

// Update a ticket by ID
const updateTicket = async (id, ticketData) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/edit/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(ticketData)
        });
        
        // Check for successful response
        if (!response.ok) {
            throw new Error('Failed to update ticket');
        }

        return await response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const cancel = async (id) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/edit/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify({ status: 'Cancelled' })
        });

        // Check for successful response
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to cancel ticket');
        }

        return await response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
};


export { list, remove, create, getTicket, updateTicket, cancel };
