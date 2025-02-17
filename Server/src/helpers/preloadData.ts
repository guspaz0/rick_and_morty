import FavoriteRepository from "../repository/favoriteRepository";
import UserRepository from "../repository/userRepository";
import { userRequestDTO } from "../Dto/userRequestDTO";
import { AppDataSource } from "../configs/data-source";
import { Favorite } from "../entities/Favorite";
import { Status, Gender, Species } from "../interfaces/Character";
import FavoriteDTO from "../Dto/FavoriteDTO";

const users = [
    new userRequestDTO("gustavo paz", "gustavo@gmail.com", "abc123"),
    new userRequestDTO("Maria del valle","maria@gmail.com","abc123")
]

const favorites = [
    new FavoriteDTO(1,"Rick Sanchez", Status.Alive, Gender.Male, Species.Human,"https://rickandmortyapi.com/api/character/avatar/1.jpeg"),
    new FavoriteDTO(2,"Morty Smith", Status.Alive, Gender.Male, Species.Human,"https://rickandmortyapi.com/api/character/avatar/2.jpeg"),
    new FavoriteDTO(3,"Summer Smith", Status.Alive, Gender.Female, Species.Human,"https://rickandmortyapi.com/api/character/avatar/3.jpeg")
]


export const preloadUsers = async ()=> {
    await AppDataSource.manager.transaction(async (transactionalEntityManager: any) => {
        for await (const user of users) {
            const createUser = await UserRepository.create(user)
            await transactionalEntityManager.save(createUser)
        }
        console.log("precarga de usuarios realizado con exito")
    })
}

export const preloadFavorites = async ()=> {
    await AppDataSource.manager.transaction(async (transactionalEntityManager: any) => {
        for await (const fav of favorites) {
            const randomId = Math.round(1*Math.random()+1)
            const user = await UserRepository.findById(randomId)
            fav.users = [user]
            const createFav = await FavoriteRepository.create(fav)
            await transactionalEntityManager.save(createFav)
        }
        console.log("precarga de favoritos realizado con exito")
    })
}