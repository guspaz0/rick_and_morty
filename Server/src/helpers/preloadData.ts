import { DataSource } from "typeorm";
import { userRequestDTO } from "../Dto/userRequestDTO";
import { AppDataSource, FavoriteModel, UserModel } from "../configs/data-source";
import { Favorite } from "../entities/Favorite";
import { Status, Gender, Species } from "../interfaces/Character";

const user1 = new userRequestDTO(
    "gustavo paz",
    "gustavo@gmail.com",
    "abc123"
)
const user2 = new userRequestDTO(
    "Maria del valle",
    "maria@gmail.com",
    "abc123"
)

const favChar1 = new Favorite()
favChar1.id = 1
favChar1.name = "Rick Sanchez"
favChar1.status = Status.Alive
favChar1.species = Species.Human
favChar1.gender = Gender.Male
favChar1.image = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

const favChar2 = new Favorite() 
favChar2.id = 2
favChar2.name = "Morty Smith"
favChar2.status = Status.Alive
favChar2.species = Species.Human
favChar2.gender = Gender.Male
favChar2.image = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"


export const preloadData = async ()=> {
    await AppDataSource.manager.transaction(async (transactionalEntityManager: any) => {
        const newUser1 = await UserModel.create(user1)
        const newUser2 = await UserModel.create(user2)

        await transactionalEntityManager.save(newUser1)
        await transactionalEntityManager.save(newUser2)

        const newFavCharacter1 = await FavoriteModel.create(favChar1)
        const newFavCharacter2 = await FavoriteModel.create(favChar2)

        newFavCharacter1.users = [newUser1]
        newFavCharacter2.users = [newUser2]

        await transactionalEntityManager.save(newFavCharacter1)
        await transactionalEntityManager.save(newFavCharacter2)

        console.log("precarga de datos realizado con exito")
    })
}