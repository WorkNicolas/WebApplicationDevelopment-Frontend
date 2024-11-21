/**
 * @file Register.js
 * @author Carl Nicolas Mendoza
 * @id 301386435
 * @date 2024-10-11
 * @description Contains the registration form.
 * 
 * @returns {Register}
 */
//React
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
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
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <fieldset className="custom-fieldset">
                    <legend className="custom-legend">Registration Form</legend>
                    <div class="block">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <label for="name"></label>
                        <input type="text" id="name" name="name" placeholder="Name" />
                    </div>
                    <div class="block">
                        <FontAwesomeIcon icon={faPhone} />
                        <label for="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" />
                    </div>
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

export default Register;