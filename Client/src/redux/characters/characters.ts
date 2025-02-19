import {ActionTypes} from '../../interfaces/actionTypes.ts';
import IAction from "../../interfaces/IAction.ts";
import { CharacterState } from '../../interfaces/globalState.ts';


const initialState: CharacterState = {
    characters: [],
    cp_characters: [],
    pageInfo: {},
    errors: {}
};

export default function charactersState(state = initialState, {type, payload}: IAction<any>): CharacterState {
    switch(type) {
        case ActionTypes.ADD_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, payload],
                cp_characters: [...state.cp_characters, payload]
            }
        case ActionTypes.DEL_CHARACTER:
            return {
                ...state,
                characters: [...state.characters.filter((e) => e.id !== payload)],
                cp_characters: [...state.cp_characters.filter((e) => e.id !== payload)]
            }
        case ActionTypes.FILTER:
            return {
                ...state,
                characters: state.cp_characters.filter((x) => x.gender === payload),
                cp_characters: state.characters
            }
        case ActionTypes.ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    characters: state.characters.sort((a,b) => +a.id < b.id ? 1 : -1),
                }
            } else {
                return {
                    ...state,
                    characters: state.characters.sort((a,b) => +a.id > +b.id ? 1 : -1),
                }
            };
        case ActionTypes.RESET:
            return {
                ...state,
                characters: [...state.cp_characters],
            }
        case ActionTypes.ERROR_CHARACTER:
            return {
                ...state,
                errors: payload
            }
        case ActionTypes.SEARCH_CHARACTER:
            return {
                ...state,
                pageInfo: payload.info,
                characters: payload.results
            }
        default:
            return {
                ...state,
            }
    }
};