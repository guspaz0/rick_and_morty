import styled from "styled-components";

export const Login1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 400px;
    background-color: gray;
    border-radius: 5px;
    box-shadow: 50% black;
    line-height: .5cm;
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
    :hover{
            background-color: yellow;
            color: black;
        }
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
        left: 100px;
        height: 200px;
        justify-content: center;
        align-item: center;
        border-radius: 130px;
    }
` 