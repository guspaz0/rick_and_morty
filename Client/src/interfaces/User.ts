import {Character} from "./Character.ts";

interface User {
    id?: number
    name?: string
    email?: string
    createdAt?: Date
    updatedAt?: Date
    access?: boolean
    favorites?: Character[]
}

type UserId = Pick<User, 'id'>

export type { User, UserId };