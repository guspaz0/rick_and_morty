import styled from "styled-components";

export const Navbar = styled.div`
    position: absolute;
    width: 100%;
    height: 60px;
    top: 8px;
    right: 0px;
    background-color: slateblue;
    input {
        text-align: center;
        font: inherit;
        padding: 0.5rem;
        border-radius: 6px;
        border: 1px solid #ccc;
        width: 15rem;
        max-width: 100%;
        top: 10px;
        position:absolute;
        right: 150px;
    }
    button {
        background-color: green;
        color: white;
        position: absolute;
        right: 20px;
        top: 13px;
        width: 100px;
        height: 30px;
        border-radius: 5px;
        font-size: .5cm;
        :hover{
            background-color: yellow;
            color: black;
        }
    }
`;