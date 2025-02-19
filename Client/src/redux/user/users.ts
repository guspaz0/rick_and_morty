import {ActionTypes} from "../../interfaces/actionTypes.ts";
import Action from "../../interfaces/IAction.ts";
import { UserState } from "../../interfaces/globalState.ts";
import IAction from "../../interfaces/IAction.ts";


const initialState: UserState = {
    user: {
        name: '',
        email: ''
    },
    favorites: [],
    cp_favorites: [],
    errors: {}
}

export default function userState(state = initialState, {type, payload}: IAction<any>): UserState {
    switch(type) {
        case ActionTypes.LOGIN:
            return {
                ...state, 
                user: {...payload}
            }
        case ActionTypes.GET_FAVORITES:
            return {
                ...state,
                favorites: [...payload],
                cp_favorites: [...payload]
            }
        case ActionTypes.ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, payload],
                cp_favorites: [...state.favorites, payload]
            }
        case ActionTypes.REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(({id}) => id !== payload.id),
                cp_favorites: state.cp_favorites.filter(({id}) => id !== payload.id)
            }
        case ActionTypes.FILTER:
            return {
                ...state,
                favorites: [...state.cp_favorites.filter((x) => x[payload] === payload)],
                cp_favorites: state.favorites
            }
        case ActionTypes.ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    favorites: state.favorites.sort((a,b) => parseInt(a.id) < parseInt(b.id) ? 1 : -1),
                }
            } else {
                return {
                    ...state,
                    favorites: state.favorites.sort((a,b) => parseInt(a.id) > parseInt(b.id) ? 1 : -1),
                }
            }
        case ActionTypes.RESET:
            return {
                ...state,
                favorites: [...state.cp_favorites],
            }
        case ActionTypes.ERROR_USER:
            return {
                ...state,
                errors: payload 
            }
        default:
            return {
                ...state,
            }
    }
};