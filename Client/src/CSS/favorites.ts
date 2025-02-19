import styled from "styled-components";

export const Card1 = styled.div`
    position:relative;
    width: 260px;
    height: 260px;
    background-color: rgba(255,255,255,.2);
    border-radius: 5px;
    filter: drop-shadow(0px 0px 6px black);
`;

export const Img = styled.img`
    border-radius: 5px;
    width: 230px;
    position: relative;
    top: 15px;
    left: 15px;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    position: absolute;
    left: 20px;
    top: 5px;
    background-color: rgba(0,0,0,.4);
    padding-inline: 5px;
    border-radius: 5px;
`;

export const SpecieStyle = styled.h2`
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 400;
    position: absolute;
    top: 270px;
    left: 30px;
`;

export const GenderStyle = styled.h2`
    color: var(--text-color);
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

export const Fav = styled.button` 
    background-color: white;
    width: 25px;
    height: 25px;
    color: white;
    position: absolute;
    left: 10px;
    top: 10px;
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


export const FilterStyles = styled.div`
    padding: 5px; 
    display: flex;
    background-color: rgba(255,255,255,0.2);
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    top: 100px;
    gap: 5px;
    select {
        border: none;
        padding: 3px;
        border-radius: 5px;
    }
`
export const FavoritesStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .card-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
    }
`
;

