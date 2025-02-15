import { getTreeRepository } from 'typeorm'
import {Gender, Species, Status} from '../interfaces/Character'
import { IsNotEmpty, IsInt, IsFQDN} from 'class-validator'

export default class FavoriteDTO {
    @IsInt()
    private _id: number
    @IsNotEmpty()
    private _name: string
    @IsNotEmpty()
    private _status: Status
    @IsNotEmpty()
    private _gender: Gender
    @IsNotEmpty()
    private _species: Species
    @IsFQDN()
    private _image: string

    constructor(id: number, name: string, status: Status, gender: Gender, species: Species, image: string) {
        this._id = id
        this._name = name
        this._status = status
        this._gender = gender
        this._species = species
        this._image = image
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get status(): Status {
        return this._status;
    }

    get gender(): Gender {
        return this._gender;
    }

    get species(): Species {
        return this._species;
    }

    get image(): string {
        return this._image;
    }

}