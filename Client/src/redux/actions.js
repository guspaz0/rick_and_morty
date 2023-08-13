import axios from 'axios';
export const ADD_CHARACTER = "ADD_CHARACTER";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const ACCESS = "ACCESS";


const endpoint = 'http://localhost:3002/rickandmorty'

export function addCharacter(character) {
    return async function (dispatch) {
        try{
            const { data } = await axios.get(`${endpoint}/character/${character}`)
            if (data.name) {
                dispatch({
                    type: ADD_CHARACTER,
                    payload: data
                })
            }
        } catch (error) {
            return error
        }
    }
} 

export function addFav(character){
    return async (dispatch) => {
    try {
        //const char = {character.name, character.species, character.gender}
        const {data} = await axios.post(`${endpoint}/fav`, character)
        return dispatch({
            type: ADD_FAV,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }}
}

export function removeFav(id) {
    return async (dispatch) => {
    try {
        const {data} = await axios.delete(`${endpoint}/fav/${id}`);
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


export async function onSearchAction(character) {
    try {
        const { data } = await axios.get(`${endpoint}/character/${character}`);
        return data
    } catch (error) {
        return error
    }
}

export function loginAction(userData) {
    return async function (dispatch) {
        try {
            const { username, password } = userData;
            const { data } = await axios.get(`${endpoint}/login/?email=${username}&password=${password}`)
            dispatch ({
                type: ACCESS,
                payload: data.access
            })
        } catch (error) {
            return error
        }
    }

}