let apiURL = process.env.REACT_APP_APIURL;

const signin = async (user) => {
    try {
<<<<<<< HEAD
        let response = await fetch(apiURL + '/users/signin', {
=======
        let response = await fetch(apiURL + '/api/users/signin', {
>>>>>>> origin/master
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
};

const signup = async (user) => {
    try {
<<<<<<< HEAD
        let response = await fetch(apiURL + '/users/create', {
=======
        let response = await fetch(apiURL + '/api/users/create', {
>>>>>>> origin/master
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log("signup error ", err);
    }
}

export { signin, signup };