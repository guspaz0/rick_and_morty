import {IsEmail, MinLength} from 'class-validator'

export class loginRequestDTO {
    @IsEmail()
    private _email: string
    @MinLength(4,{message: "password must be 4 characters minimum"})
    private _password: string

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }
}