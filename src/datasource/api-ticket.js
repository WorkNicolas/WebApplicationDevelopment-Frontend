let apiURL = process.env.REACT_APP_APIURL;

const list = async () => {
    try {
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

const create = async (product) => {
    try {
        let response = await fetch(apiURL + '/api/ticket/add/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
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

export { list, remove, create };