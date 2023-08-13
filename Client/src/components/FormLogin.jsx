import React from 'react';
import validation from './validation.js';
import { Login1 } from '../CSS/formlogin.js';

export function FormLogin(props) {
    const [userData, setUserData] = React.useState({      
        username: '',
        password: '' 
    });
    
    const [errors, setErrors] = React.useState({
        username: '',
        password: '' 
    })
    
    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData)
    }
return (
    <Login1>
    <form onSubmit={handleSubmit}>
        <img src='https://static.wikia.nocookie.net/rickandmorty/images/6/6d/CopMorty.png' alt='Police-Morty'/>
        <label>Username:</label>
            <input name="username" type='text' placeholder='escriba el usuario...'
            value={userData.username} onChange={handleInputChange} className={errors.username && '.warning'}/>
            <p className='danger'>{errors.username}</p> <br/>
        <label>Password:</label>
            <input name='password' type='password' placeholder='escriba la contraseña...'
            value={userData.password} onChange={handleInputChange} className={errors.password && '.warning'}/>
            <p className='danger'>{errors.password}</p> <br/>
        <button type='submit'>LOGIN</button>
    </form>
    </Login1>
)}