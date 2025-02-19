import {User} from "./User.ts";
import {Character} from "./Character.ts";
import { PaginationInfo } from "./Character.ts";


export interface UserState {
    user: User
    favorites: Character[],
    cp_favorites?: Character[],
    errors?: object
}

export interface CharacterState {
    characters: Character[];
    cp_characters?: Character[];
    pageInfo?: PaginationInfo
    errors?: object
}

export interface GlobalState {
    user: UserState;
    characters: CharacterState
}