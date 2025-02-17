import {ActionTypes} from '../../interfaces/actionTypes.ts';
import Action from "../../interfaces/Action.ts";
import { CharacterState } from '../../interfaces/globalState.ts';

const initialState: CharacterState = {
    characters: [],
    cp_characters: []
};

export default function charactersState(state = initialState, {type, payload}: Action) {
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
                characters: state.characters.filter((e) => e.id !== payload),
                cp_characters: state.cp_characters.filter((e) => e.id !== payload)
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
        default:
            return {
                ...state,
            }
    }
};