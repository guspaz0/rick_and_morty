import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import charactersState from "./characters/characters.ts";
import userState from './user/users.ts';
import { configureStore } from '@reduxjs/toolkit'

const composed = composeWithDevTools(applyMiddleware(thunk));

// const store = createStore(
//     rootReducer,
//     composed
// );

const store = configureStore({
    reducer: {
        characters: charactersState,
        user: userState
    },
    middleware: composed
})

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store;
