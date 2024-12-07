import { getToken } from "../components/auth/auth-helper";
let apiURL = process.env.REACT_APP_APIURL;

const signin = async (user) => {
    try {
        let response = await fetch(apiURL + '/api/users/signin', {
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
        let response = await fetch(apiURL + '/api/users/create', {
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


const getUser = async (userId) => {
    try {
        let response = await fetch(apiURL + '/api/users/get/' + userId, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + getToken() }
        })
        return await response.json()
    } catch (err) {
        console.log("getUser error ", err);
    }
}

const editProfile = async (userId, user) => {
    console.log("editProfile ", userId, user);
    try {
        let response = await fetch(apiURL + '/api/users/edit/' + userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log("editProfile error ", err);
    }
}

export { signin, signup, getUser, editProfile };