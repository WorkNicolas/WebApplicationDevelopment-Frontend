//React
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

//API
import { editProfile, getUser } from '../../datasource/api-user';
import { authenticate } from '../auth/auth-helper';
import { getUserId } from '../auth/auth-helper';

// redux
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const EditUser = () => {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        role: '',
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

    const userId = getUserId();

    const handleSubmit = (e) => {
        e.preventDefault();
        editProfile(userId,formData).then((response) => {
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
    
    useEffect(() => {
        getUser(userId).then((response) => {
            setFormData(response);
        });
    }, []);

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <fieldset className="custom-fieldset">
                    <legend className="custom-legend">Edit Profile</legend>
                    <div className="block">
                        <FontAwesomeIcon icon={faCircleInfo} />
                        <label htmlFor="username"></label>
                        <input type="text" id="username" value={formData?.username } name="username" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faPhone} />
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" value={formData?.phone} placeholder="Phone Number" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <label htmlFor="email"></label>
                        <input type="text" id="email" name="email" value={formData?.email} placeholder="Email" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faLock} />
                        <label htmlFor="password"></label>
                        <input type="password" id="password" name="password" value={formData?.password || ''} placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="block">
                        <FontAwesomeIcon icon={faUser} />
                        <select name="role" id="role" onChange={handleChange} style={{ marginLeft: '1.6%' }} value={formData?.role}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                </fieldset>
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </form>
        </div>
    );
}

export default EditUser;