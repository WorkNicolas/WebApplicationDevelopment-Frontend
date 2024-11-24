let apiURL = process.env.REACT_APP_APIURL;

const list = async () => {
    try {
<<<<<<< HEAD
=======
        console.log(apiURL);
>>>>>>> origin/master
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

<<<<<<< HEAD
const create = async (product) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/add/', {
=======
const create = async (ticket) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/create/', {
>>>>>>> origin/master
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
<<<<<<< HEAD
            body: JSON.stringify(product)
=======
            body: JSON.stringify(ticket)
>>>>>>> origin/master
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

<<<<<<< HEAD
export { list, remove, create };
=======
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
>>>>>>> origin/master
