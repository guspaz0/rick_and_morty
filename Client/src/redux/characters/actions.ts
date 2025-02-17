import {ActionTypes as actions, ActionTypes} from '../../interfaces/actionTypes.ts';
import {AppDispatch} from '../store.ts'
import {Character, PageResults, Status, CharacterId, CharacterName} from "../../interfaces/Character.ts";
import axios from "axios";

const endpoint = "http://server:3002"
const api = "https://rickandmortyapi.com/api"

export default {
    addCharacter: function (id: CharacterId) {
        return async function (dispatch: AppDispatch) {
            try{
                const { data } = await axios.get(`${api}/character/${id}`)
                if (data.name) {
                    dispatch({
                        type: actions.ADD_CHARACTER,
                        payload: data
                    })
                }
            } catch (error) {
                return error
            }
        }
    },
    delCharacter: function (id: CharacterId) {
        return function (dispatch: AppDispatch) {
            dispatch({
                type: actions.DEL_CHARACTER,
                payload: id
            })
        }
    },
    filterCards: function(status: Status) {
        return function(dispatch: AppDispatch){
            return dispatch({
                type: actions.FILTER,
                payload: status,
            })
        }
    },
    orderCards: function (id: number) {
        return function(dispatch: AppDispatch) {
            return dispatch({
                type: actions.ORDER,
                payload: id,
            })
        } 
    },
    orderReset: function() {
        return function (dispatch: AppDispatch) {
            return dispatch({
                type: actions.RESET,
                payload: ''
            })
        }
    },
    onSearchAction: function (character: CharacterName) {
        return async function(dispatch: AppDispatch) {
            try {
                const {data} = await axios.get(`${endpoint}/character/?name=${character.name}`);
                if (data) {
                    const results: PageResults = data
                    return dispatch({
                        type: ActionTypes.SEARCH_CHARACTER,
                        payload: results
                    })
                }
                return data
            } catch (error) {
                return error
            }
        }
    }
}