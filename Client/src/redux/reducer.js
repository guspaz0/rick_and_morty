import { REMOVE_FAV, ADD_FAV, FILTER, ORDER, RESET, ADD_CHARACTER, DEL_CHARACTER, ACCESS, DB_FAVORITES } from './actions';

const initialState = {
    myFavorites: [],
    dbFavorites: [],
    allCharacters: [],
    Access: false,
    User: '',
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ACCESS:
            return {...state, Access: payload.access, User: payload.user}
        case ADD_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload] 
            }
        case DEL_CHARACTER:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((e) => e.id !== payload)
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload]
            };
        case REMOVE_FAV:
            const deleteFav = state.allCharacters.filter((x) => x.id !== payload)
            return {
                ...state,
                myFavorites: deleteFav,
                allCharacters: deleteFav,
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((x) => x.gender === payload)
            }
        case ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => parseInt(a.id) < parseInt(b.id) ? 1 : -1),
                }
            }else {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => parseInt(a.id) > parseInt(b.id) ? 1 : -1),
                }
            };
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allCharacters],
            }
        case DB_FAVORITES:
            return {
                ...state,
                dbFavorites: payload,
                myFavorites: payload
            }
        default:
            return {
                ...state,
            }

    }
};

export default rootReducer;