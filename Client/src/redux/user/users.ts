import {ActionTypes} from "../../interfaces/actionTypes.ts";
import Action from "../../interfaces/Action.ts";
import { UserState } from "../../interfaces/globalState.ts";


const initialState: UserState = {
    user: {
        name: '',
        email: ''
    },
    favorites: [],
    cp_favorites: []
}

export default function userState(state = initialState, {type, payload}: Action): UserState {
    switch(type) {
        case ActionTypes.LOGIN:
            return {
                ...state, 
                user: {...payload.user}
            }
        case ActionTypes.GET_FAVORITES:
            return {
                ...state,
                favorites: [...payload.favorites],
                cp_favorites: payload.favorites
            }
        case ActionTypes.ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }
        case ActionTypes.REMOVE_FAV:
            return {
                ...state,
                favorites: state.favorites.filter(({id}) => id !== payload)
            }
        case ActionTypes.FILTER:
            return {
                ...state,
                favorites: [...state.favorites.filter((x) => x[payload] === payload)],
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
        default:
            return {
                ...state,
            }
    }
};