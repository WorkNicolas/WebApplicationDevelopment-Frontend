/*
 * Web App: Ticket Master
 * Authors: Mendoza, Carl Nicolas – 301386435
            To, Cheuk Man Edmond– 301378748
            Dou, Fang – 301381266
            HUI, LIT TUNG – 301387861
 * @file Register.js
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
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

//API
import { signup } from '../datasource/api-user';
import { authenticate } from './auth/auth-helper';

// redux
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const Register = () => {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        role: 'user',
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData).then((response) => {
            if(response && response.success){
                setError(null);
                authenticate(response.token,()=>{
                    navigate('/');
                });
                dispatch(login());
            } else {
                setError(response.message);
            }
        }).catch((error) => {
            setError(error.message);
        });
    };
    
    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <fieldset className="custom-fieldset">
                    <legend className="custom-legend">Registration Form</legend>
                    <div className="block">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <label htmlFor="username"></label>
                        <input type="text" id="username" name="username" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faPhone} />
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label htmlFor="email"></label>
                        <input type="text" id="email" name="email" placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faLock} />
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    {/* <div className="block">
                        <FontAwesomeIcon icon={faUser} />
                        <select name="role" id="role" onChange={handleChange} style={{ marginLeft: '1.6%' }}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div> */}
                    {error && <p className="text-danger">{error}</p>}
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default Register;