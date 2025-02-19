export interface UserLogin {
    email?: string;
    password?: string;
}

export interface LoginError {
    target: {
        _email: string, 
        _password: string
    }
    value: string
    property: UserLogin
    children: []
    constraints: {
        isEmail?: string
        isNotEmpty?: string
        minLength?: string
    } 
}


export type userUsername = Pick<UserLogin, 'email'>
export type userPassword = Pick<UserLogin, 'password'>