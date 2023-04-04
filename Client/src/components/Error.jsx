import React from "react";
import styled from "styled-components";

const ErrorMsg = styled.div`
    position: absolute;
    top: 100px;
    left: 50px;
    h1 {
        font-size: 3cm;
        color: orange;
        font: Calibri;
    }
    h2 {
        font-size: 1.5cm;
        color: orange;
        font: Calibri;
    }
`

export default function Error(){

    return(
        <ErrorMsg>
        <div>
            <h1>Error 404</h1>
            <h2>Route not found</h2>
        </div>
        </ErrorMsg>
    )
}