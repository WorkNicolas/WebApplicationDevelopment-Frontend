/**
 * @file Login.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the login form.
 * 
 * @returns {Login}
 */
//React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Login Form</legend>
                    <div class="block">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label for="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faLock} />
                        <label for="password"></label>
                        <input type="text" id="password" name="password" placeholder="Password" />
                    </div>
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default Login;