import React from 'react';
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
        </div>
        <img src="https://avatars.githubusercontent.com/u/103156469?s=400&u=65c8690b1c2dd0e6fba898e8eee567a81c6ed1af&v=4" alt="Yo"/>
    </AboutStyle>
    )
}