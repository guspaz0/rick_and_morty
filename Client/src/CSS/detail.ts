import styled from "styled-components";

export const Card1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 500px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 2px -6px 10px black;
    position: relative;
    /* left: 650px;
    top: 100px; */
`;

export const Img = styled.img`
    border-radius: 5%;
    box-shadow: 2px -6px 10px black;
    width: 230px;
    position: relative;
    top: 50px;
`;
export const P1 = styled.p`
    position: absolute;
    background-color: black;
    border-radius: 5px;
    top: 220px;
    left: 90px;
    width: 220px;
    height: 35px;
    opacity: .5;
`;
export const Name = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 95px;
    top: 227px;
    opacity: 1;
`;

export const Status = styled.h1`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 270px;
    left: 20px;
`;

export const Specie = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 295px;
    left: 20px;
`;

export const Gender = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 325px;
    left: 20px;
`;
export const Origen = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 355px;
    left: 20px;
`;
export const Locacion = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 385px;
    left: 20px;
`;
export const Button1 = styled.button` 
    background-color: rgb(200 0 0);
    font-weight:bold;
    font-size: 1.2rem;
    position: absolute;
    width: 100px;
    height: 30px;
    color: white;
    left: 170px;
    top: 5px;
    border-radius: 5px;
    :hover {
        background-color: yellow;
        color: black;
    }
`;