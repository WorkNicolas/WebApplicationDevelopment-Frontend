let apiURL = process.env.REACT_APP_APIURL;

const list = async () => {
    try {
        console.log(apiURL);
        let response = await fetch(apiURL + '/api/ticket/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
                'Content-Type': 'application/json'
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
                'Content-Type': 'application/json'
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
        let response = await fetch(apiURL + '/api/ticket/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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
                'Content-Type': 'application/json'
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


export { list, remove, create, getTicket, updateTicket };
