import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class userRequestDTO {
    @IsNotEmpty()
    private _name: string;
    @IsEmail()
    private _email: string;
    @MinLength(6,{message: "password must be 4 characters minimum"})
    private _password: string;
    private _createdAt: Date = new Date(Date.now() / 1000);

    constructor(
        name: string, email: string, password: string
    ) {
        this._name = name
        this._email = email
        this._password = password
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    get createdAt(): Date {
        return this._createdAt;
    }
}