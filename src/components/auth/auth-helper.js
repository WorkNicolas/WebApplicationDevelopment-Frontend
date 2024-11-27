import { jwtDecode } from "jwt-decode";

const authenticate = (token, cb) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('token', token);

        let decoded = jwtDecode(token);
        sessionStorage.setItem('username', decoded.username)
    }
    cb();
}

const isAuthenticated = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return !!sessionStorage.getItem('token');
}

const getToken = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem('token');
}

const getUsername = () => {
    if (typeof window === "undefined") {
        return false;
    }
    return sessionStorage.getItem('username');
}

const getUserId = () => {
    if (typeof window === "undefined") {
        return false;
    }
    let decoded = jwtDecode(getToken());
    return decoded.id;
}

const clearJWT = () => {
    console.log("clearing JWT");
    if (typeof window !== "undefined") {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
    }
}

export { authenticate, isAuthenticated, getToken, getUsername, clearJWT, getUserId }