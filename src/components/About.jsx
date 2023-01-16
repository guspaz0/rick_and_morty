import styled from 'styled-components';


const about = styled.img`
    border-radius: 5px;
    width: 300px;
    position: Absolute;
    top: 0px;
    right: 0px;
`;

export default function About(){
    return (<div> Esta es una aplicacion react de prueba para el modulo 2 para la carrera de Full Stack Developer de Henry!
        Alumno: Gustavo Rodolfo Paz
        Edad: 32 Años
        Nacionalidad: Argentina
        Estado/provincia: Santiago del estero, capital.
        <img style={about} src="yo_perfil.jpg" alt="Yo"/>
    </div>
    )
}