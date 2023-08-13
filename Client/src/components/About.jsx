import React from 'react';
import img from './yo_perfil.jpg'
import { AboutStyle } from '../CSS';


export function About(){
    return (
    <AboutStyle>
    <div> 
        <h1>Sobre Mi</h1>
        <p>Esta es una aplicacion react de prueba del modulo 2 para la carrera de Full Stack Developer de Henry!</p>
        <ul>
            <li>Alumno: Gustavo Rodolfo Paz</li>
            <li>Nacionalidad: Argentina</li>
            <li>Estado/provincia: Santiago del estero, capital.</li>
        </ul>
        <img src={img} alt="Yo"/>
    </div>
    </AboutStyle>
    )
}