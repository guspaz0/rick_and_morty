import React from "react";
import { ErrorMsg } from "../CSS";

export function Error(){

    return(
        <ErrorMsg>
            <h1>Error 404</h1>
            <h2>Route not found</h2>
        </ErrorMsg>
    )
}