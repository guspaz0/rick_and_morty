import axios, { AxiosError, AxiosResponse } from "axios";
import {ActionTypes } from "../../interfaces/actionTypes.ts";
import {LoginError, UserLogin} from "../../interfaces/userLogin.ts";
import {Character, CharacterId, Species, Status, Gender} from "../../interfaces/Character.ts";
import { PostFav } from "../../interfaces/postFav.ts";
import { TAppState, TDispatch, TGetState } from "../store.ts";
import { UserId, User } from "../../interfaces/User.ts";
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk';


const endpoint = import.meta.env.VITE_BACKEND //"http://server-rym:3002"

const userActions = {
    loginAction: function(userData: UserLogin): ThunkAction<Promise<void>, TAppState, any, Action<ActionTypes>> {
        return async function (dispatch: TDispatch) {
            try {
                const resp = await fetch(endpoint+'/user/login',{
                    headers: {'Content-Type': 'application/json'},
                    method: 'POST',
                    body: JSON.stringify(userData)
                })
                if (resp.ok) {
                    dispatch ({
                        type: ActionTypes.LOGIN,
                        payload: await resp.json()
                    })
                } else if (resp.status == 404) {
                    return dispatch({
                        type: ActionTypes.ERROR_USER,
                        payload: await resp.json()
                    });
                }
            } catch (error: any) {
                return error
            }
        }
    },
    getUserFavs: function (user: UserId) {
        return async function (dispatch: TDispatch) {
            try{
                const resp: Response = await fetch(endpoint+'/user/favorites',{
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': JSON.stringify(user)
                    }
                })
                if (resp.ok) {
                    dispatch({
                        type: ActionTypes.GET_FAVORITES,
                        payload: await resp.json()
                    })
                } else if (resp.status == 404) {
                    return dispatch({
                        type: ActionTypes.ERROR_USER,
                        payload: await resp.json()
                    });
                }
            }catch (error) {
                return error
            }
        }
    },
    addOrRemoveFav: function (character: Character) {
        return async (dispatch: TDispatch) => {
            try {
                const { data } = await axios.post<PostFav>(`${endpoint}/favorites`, character, {
                    headers: {'authorization': `${character.user?.id}`}
                })
                if (data) {
                    return dispatch({
                        type: data == PostFav.ADD
                            ? ActionTypes.ADD_FAV
                            : ActionTypes.REMOVE_FAV,
                        payload: character
                    })
                }
            } catch (error) {
                return error
            }
        }
    },
    filterFav: function(prop: Species | Gender | Status){
        return function (dispatch: TDispatch) {
            return dispatch({
                type: ActionTypes.FILTER,
                payload: prop
            })
        }
    }
}

export default userActions;