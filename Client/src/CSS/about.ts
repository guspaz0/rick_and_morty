import styled from "styled-components";

export const AboutStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    filter: drop-shadow(2px 4px 6px black);
    align-items: center;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    border-radius: 5px;
    font-size: 16px;

    ul, li {
        opacity: .9;
        font-size: .8cm;
    }

    img{
        border-radius: 200px;
        width: 250px;
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