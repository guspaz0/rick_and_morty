import styled from "styled-components";

export const FormLoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    backdrop-filter: blur(1px);
    border-radius: 5px;
    box-shadow: 50% black;
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
    }
    button:hover{
        background-color: yellow;
        color: black;
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
        width: 100%;
    }
` 