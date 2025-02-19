import { Action } from 'redux'
import { ActionTypes } from './actionTypes'

export default interface IAction<T> extends Action<ActionTypes> {
    type: ActionTypes
    payload: T
}