import {ActionTypes as actions, ActionTypes} from '../../interfaces/actionTypes.ts';
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk';
import {AppDispatch, TAppState} from '../store.ts'
import {Character, PageResults, Status, CharacterId, CharacterName, PaginationInfo} from "../../interfaces/Character.ts";
import axios from "axios";
import {TDispatch} from '../store.ts'

const endpoint = import.meta.env.VITE_BACKEND
const api = "https://rickandmortyapi.com/api"

export default {
    addCharacter: function (id: number): ThunkAction<Promise<void>, TAppState, any, Action<ActionTypes>> {
        return async function (dispatch: TDispatch) {
            try{
                const {data} = await axios.get<Character>(`${api}/character/${id}`)
                if (data.name) {
                    dispatch({
                        type: actions.ADD_CHARACTER,
                        payload: data
                    })
                }
            } catch (error: any) {
                return error
            }
        }
    },
    delCharacter: function (id: CharacterId) {
        return function (dispatch: TDispatch) {
            dispatch({
                type: actions.DEL_CHARACTER,
                payload: id
            })
        }
    },
    filterCards: function(status: Status) {
        return function(dispatch: TDispatch){
            return dispatch({
                type: actions.FILTER,
                payload: status,
            })
        }
    },
    orderCards: function (id: number) {
        return function(dispatch: TDispatch) {
            return dispatch({
                type: actions.ORDER,
                payload: id,
            })
        } 
    },
    orderReset: function() {
        return function (dispatch: TDispatch) {
            return dispatch({
                type: actions.RESET,
                payload: ''
            })
        }
    },
    onSearchAction: function ({name}: CharacterName) {
        return async function(dispatch: TDispatch) {
            try {
                const {data} = await axios.get<PageResults>(`${api}/character/?name=${name}`);
                if (data) {
                    return dispatch({
                        type: ActionTypes.SEARCH_CHARACTER,
                        payload: data
                    })
                }
                return data
            } catch (error) {
                dispatch({
                    type: actions.ERROR_CHARACTER,
                    payload: error
                })
            }
        }
    },
    pagesRequest: function(url: Pick<PaginationInfo, 'next' | 'prev'>) {
        return async function(dispatch: TDispatch) {
            try {
                const {data} = await axios.get<PageResults>(url);
                if (data) {
                    return dispatch({
                        type: ActionTypes.SEARCH_CHARACTER,
                        payload: data
                    })
                }
                return data
            } catch (error) {
                dispatch({
                    type: actions.ERROR_CHARACTER,
                    payload: error
                })
            }
        }
    }
}