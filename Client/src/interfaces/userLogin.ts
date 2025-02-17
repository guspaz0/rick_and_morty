export interface UserLogin {
    username: string;
    password: string;
}

export type userUsername = Pick<UserLogin, 'username'>
export type userPassword = Pick<UserLogin, 'password'>