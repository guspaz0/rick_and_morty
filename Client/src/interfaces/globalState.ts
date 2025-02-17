import {User} from "./User.ts";
import {Character} from "./Character.ts";

export interface UserState {
    user: User
    favorites: Character[],
    cp_favorites?: Character[]
}

export interface CharacterState {
    characters: Character[];
    cp_characters: Character[];
}

export interface GlobalState {
    user: UserState;
    characters: CharacterState
}