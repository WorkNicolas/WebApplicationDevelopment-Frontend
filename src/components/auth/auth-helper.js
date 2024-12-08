import { jwtDecode } from "jwt-decode";

const authenticate = (token, cb) => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem('token', token);

        let decoded = jwtDecode(token);
        sessionStorage.setItem('username', decoded.username);
        sessionStorage.setItem('role', decoded.role);
        sessionStorage.setItem('email', decoded.email);
        sessionStorage.setItem('phone', decoded.phone);
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

const getRole = () => {
    if (typeof window === "undefined" || !getToken()) {
        return false;
    }
    let decoded = jwtDecode(getToken());
    return decoded.role; 
}

const getEmail = () => {
    if (typeof window === "undefined" || !getToken()) {
        return false;
    }
    let decoded = jwtDecode(getToken());
    return decoded.email; 
}

const getPhone = () => {
    if (typeof window === "undefined" || !getToken()) {
        return false;
    }
    let decoded = jwtDecode(getToken());
    return decoded.phone; 
}


export { authenticate, isAuthenticated, getToken, getUsername, clearJWT, getUserId, getRole, getEmail, getPhone }