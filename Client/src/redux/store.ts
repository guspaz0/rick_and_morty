import { applyMiddleware, combineReducers, legacy_createStore as createStore, Store, Action, AnyAction } from 'redux';
import {thunk, ThunkDispatch} from 'redux-thunk';
//import {IAction} from '../interfaces/IAction.ts';
import { ActionTypes } from '../interfaces/actionTypes.ts';
import { composeWithDevTools } from '@redux-devtools/extension';
import charactersState from "./characters/characters.ts";
import userState from './user/users.ts';

const rootReducer = combineReducers({
    characters: charactersState,
    user: userState
})

export type TAppState = ReturnType<typeof rootReducer>;
export type TDispatch = ThunkDispatch<TAppState, void, Action<ActionTypes>>;
export type TStore = Store<TAppState, Action<ActionTypes>> & { dispatch: TDispatch };
export type TGetState = () => TAppState;


const composed = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    rootReducer,
    composed
)

export default store;
