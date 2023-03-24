import styled from 'styled-components';
import React from 'react';
import validation from './validation.js';

const Login1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 400px;
    background-color: gray;
    border-radius: 5px;
    box-shadow: 50% black;
    line-height: .5cm;
    label {
        font-size: .6cm;
        line-height: .5cm;
    }
    button {
        background-color: green;
        color: white;
        border-radius: 5px;
        font-size: .5cm;
        border-color: black;
        border-width: 1px;
        border-style: solid;
        line-height: 1cm;
    :hover{
            background-color: yellow;
            color: black;
        }
    }
    input{
        border-radius: 5px;
        font-size: .5cm;
        margin-top: 10px;
    }
    .warning {
        color: red
    }

    .danger {
        font-size: 15px;
        color: orange;
        margin-left: 5em;
    }
    img{
        display: flex;
        position: relative;
        left: 100px;
        height: 200px;
        justify-content: center;
        align-item: center;
        border-radius: 130px;
    }
` 

export default function FormLogin(props) {
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
    <div>
    <form onSubmit={handleSubmit}>
        <img src='https://static.wikia.nocookie.net/rickandmorty/images/6/6d/CopMorty.png'></img>
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
    </div>
    </Login1>
)}