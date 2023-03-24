export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

export function addFavorite(product) {
    return {
        type: ADD_FAVORITE,
        payload: product,
    }
}
export function deleteFavorite(id) {
    return {
        type: DELETE_FAVORITE,
        payload: id,
    }
}
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