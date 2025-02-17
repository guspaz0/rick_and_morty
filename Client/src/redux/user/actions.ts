import axios from "axios";
import {ActionTypes as actions} from "../../interfaces/actionTypes.ts";
import {UserLogin} from "../../interfaces/userLogin.ts";
import {Character, CharacterId, Species, Status, Gender} from "../../interfaces/Character.ts";
import { AppDispatch } from "../store.ts";

const endpoint = "http://server:3002"

const userActions = {
    loginAction: function(userData: UserLogin) {
        return async function (dispatch: AppDispatch) {
            try {
                console.log(userData)
                const { data } = await axios.post(`${endpoint}/user/login`, userData)
                if (data.access) {
                    dispatch ({
                        type: actions.LOGIN,
                        payload: {access: data.access, user: data.username}
                    })
                }
            } catch (error) {
                return error
            }
        }
    },
    getUserFavs: function (userData: UserLogin) {
        return async function (dispatch: AppDispatch) {
            try{
                const { data } = await axios.get(`${endpoint}/user/favorites`,{
                    headers: {'authorization': userData.username }
                })
                if (data) {
                    dispatch({
                        type: actions.GET_FAVORITES,
                        payload: data
                    })
                }
            }catch (error) {
                return error
            }
        }
    },
    addFav: function (character: Character) {
        return async (dispatch: AppDispatch) => {
            try {
                //const char = {character.name, character.species, character.gender}
                const { data } = await axios.post(`${endpoint}/favorites`, character)
                if (data) {
                    return dispatch({
                        type: actions.ADD_FAV,
                        payload: character
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    removeFav: function (id: CharacterId) {
        return async (dispatch: AppDispatch) => {
            try {
                const {data} = await axios.delete(`${endpoint}/fav/${id}`);
                if (data) {
                    return dispatch({
                        type: actions.REMOVE_FAV,
                        payload: id
                    });
                }
            } catch (error){
                console.log(error)
            }
        }
    },
    filterFav: function(prop: Species | Gender | Status){
        return function (dispatch: AppDispatch) {
            return dispatch({
                type: actions.FILTER,
                payload: prop
            })
        }
    }
}

export default userActions;