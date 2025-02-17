import {ActionTypes} from "./actionTypes.ts";

export default interface Action {
    type: ActionTypes
    payload: any
}