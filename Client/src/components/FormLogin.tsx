import React, {useState, useEffect, JSX} from 'react';
import validation from '../utils/validation.ts';
import { FormLoginStyle } from '../CSS/formlogin.js';
import {useDispatch, useSelector} from 'react-redux';
import userActions from '../redux/user/actions.ts';
import {UserLogin} from "../interfaces/userLogin.ts";

export function FormLogin(): JSX.Element {

    const dispatch = useDispatch();
    const [userData, setUserData] = useState<UserLogin>({
        email: '',
        password: '' 
    });
    
    const [errors, setErrors] = useState<UserLogin>({
        email: '',
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
        dispatch(userActions.loginAction(userData));
    }
return (
    <FormLoginStyle>
    <form onSubmit={login}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg' alt='Rick And Morty'/>
        <label>Email:</label>
            <input name="email" type='text' placeholder='escriba el usuario...'
            value={userData.email} onChange={handleInputChange} className={errors.email && '.warning'}/>
            <p className='danger'>{errors.email}</p> <br/>
        <label>Password:</label>
            <input name='password' type='password' placeholder='escriba la contraseña...'
            value={userData.password} onChange={handleInputChange} className={errors.password && '.warning'}/>
            <p className='danger'>{errors.password}</p> <br/>
        <button type='submit'>LOGIN</button>
    </form>
    </FormLoginStyle>
)}