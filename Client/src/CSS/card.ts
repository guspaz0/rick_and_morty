import styled from "styled-components";

export const Card1 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position:relative;
    margin-right: 20px;
    width: 260px;
    height: 350px;
    background-color: white;
    border-radius: 5%;
    box-shadow: 2px -6px 10px black;
    top: 0px;
`;

export const Img = styled.img`
    border-radius: 5%;
    box-shadow: 2px -6px 10px black;
    width: 230px;
    position: relative;
    top: 50px;
    left: 15px;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 40px;
    bottom: 70px;
    opacity: 1;
`;

export const Specie = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 270px;
    left: 30px;
`;

export const Gender = styled.h2`
    color: black;
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 300px;
    left: 30px;
`;
export const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
width: 25px;
height: 25px;
color: white;
position: absolute;
left: 220px;
top: 10px;
border-radius: 5px;
:hover {
    background-color: yellow;
    color: black;
} `;

export const Fav = styled.a` 
    background-color: white;
    width: 25px;
    height: 25px;
    color: white;
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
`;

export const P1 = styled.p`
    position: absolute;
    background-color: black;
    border-radius: 5px;
    bottom: 60px;
    left: 30px;
    width: 200px;
    height: 35px;
    opacity: .5;
`;