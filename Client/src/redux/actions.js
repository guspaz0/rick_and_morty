import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';


// export function addFavorite(product) {
//     return {
//         type: ADD_FAVORITE,
//         payload: product,
//     }
// }

// ACTION | addFav
// export function addFav(character) {
//     const endpoint = 'http://localhost:3002/rickandmorty/fav';
//     return (dispatch) => {
//         axios.post(endpoint, character).then(({ data }) => {
//             return dispatch({
//                 type: ADD_FAV,
//                 payload: data,
//             });
//         });
//     };
// };

const endpoint = 'http://localhost:3002/rickandmorty/fav'

export function addFav(character){
    return async (dispatch) => {
    try {
        const {data} = await axios.post(endpoint, character)
        return dispatch({
            type: ADD_FAV,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }}
}

// export function deleteFavorite(id) {
//     return {
//         type: DELETE_FAVORITE,
//         payload: id,
//     }
// }
// export function removeFav(id) {
//     const endpoint = 'http://localhost:3002/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                 type: REMOVE_FAV,
//                 payload: data,
//             });
//         });
//     };
// };
export function removeFav(id) {
    return async (dispatch) => {
    try {
        const {data} = await axios.delete(`${endpoint}/${id}`);
        return dispatch({
            type: REMOVE_FAV,
            payload: data
            });
    } catch (error){
        console.log(error)
        
    }
}};

export function filterCards(status) {
    return {
        type: FILTER,
        payload: status,
    }
}
export function orderCards(id) {
    return {
        type: ORDER,
        payload: id,
    }
}
export function orderReset() {
    return {
        type: RESET,
    }
}