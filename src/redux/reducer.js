import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './actions';

const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_FAVORITE:
            const addFav = [...state.allCharacters, payload]
            return {
                ...state,
                myFavorites: [...addFav],
                allCharacters: [...addFav],
            }
        case DELETE_FAVORITE:
            const deleteFav = [...state.allCharacters].filter((x) => x['id'] !== payload)
            return {
                ...state,
                myFavorites: [...deleteFav],
                allCharacters: [...deleteFav],
            }
        case FILTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters].filter((x) => x['gender'] === payload)
            }
        case ORDER:
            if (payload === 'Ascendente') {
                return {
                    ...state,
                    myFavorites: [...state.myFavorites].sort((a,b) => a['id'] < b['id'] ? 1 : -1),
                }
            }else {
                return {
                    ...state,
                    myFavorites: [...state.myFavorites].sort((a,b) => a['id'] > b['id'] ? 1 : -1),
                }
            };
        case 'RESET':
            return {
                ...state,
                myFavorites: [...state.allCharacters],
            }
        default:
            return {
                ...state,
            }

    }
};

export default rootReducer;