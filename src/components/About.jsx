import React from 'react';
import styled from 'styled-components';
import img from './yo_perfil.jpg'


const AboutImg = styled.div`
    background-color:white;
    height: auto;
    width: 100%;
    border-radius: 5px;
    position: absolute;
    top: 100px;
    ul, li, p{
        opacity: .9;
        font-size: .8cm;
    }
    img{
    border-radius: 200px;
    width: 250px;
    position: Absolute;
    top: 20px;
    right: 20px;
    }
    button {
        background-color: rgb(200 0 0);
        font-weight: bold;
        color: white;
        position: absolute;
        left: 220px;
        top: 10px;
        font-size: .8cm;
        border-radius: 5px;
    }
`;

export default function About(){
    return (
    <AboutImg>
    <div> 
        <h1>Sobre Mi</h1>
        <p>Esta es una aplicacion react de prueba del modulo 2 para la carrera de Full Stack Developer de Henry!</p>
        <ul>
            <li>Alumno: Gustavo Rodolfo Paz</li>
            <li>Edad: 32 Años</li>
            <li>Nacionalidad: Argentina</li>
            <li>Estado/provincia: Santiago del estero, capital.</li>
        </ul>
        <img src={img} alt="Yo"/>
    </div>
    </AboutImg>
    )
}