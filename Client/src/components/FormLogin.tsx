import React, {useState, useEffect, JSX} from 'react';
import validation from './validation.ts';
import { FormLoginStyle } from '../CSS/formlogin.js';
import {useDispatch, useSelector} from 'react-redux';
import userActions from '../redux/user/actions.ts';
import {UserLogin} from "../interfaces/userLogin.ts";

export function FormLogin(): JSX.Element {

    const dispatch = useDispatch();
    const [userData, setUserData]: [UserLogin, Function] = useState({
        username: '',
        password: '' 
    });
    
    const [errors, setErrors]: [UserLogin, Function] = useState({
        username: '',
        password: '' 
    })
    useEffect(() => {
        setErrors(validation(userData))
    }, [userData]);
    
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }
    function login(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log(e)
        dispatch(userActions.loginAction(userData));
    }

return (
    <FormLoginStyle>
    <form onSubmit={login}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Rick And Morty'/>
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
    </FormLoginStyle>
)}