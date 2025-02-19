import { Column, Entity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm"
import {Status, Species, Gender} from "../interfaces/Character";
import { User } from "./User";

@Entity({
    name: "favorites"
})
export class Favorite {
    @PrimaryColumn("integer")
    id: number

    @Column()
    name: string

    @Column()
    status: Status

    @Column()
    gender: Gender

    @Column()
    species: Species

    @Column()
    image: string

    @ManyToMany(()=> User, (user) => user.favorites, {
        cascade: true,
    })
    @JoinTable({
        name: "user_favorites",
        inverseJoinColumn: {
            name: "user_id",
            referencedColumnName: "id",
        },
        joinColumn: {
            name: "favorite_id",
            referencedColumnName: "id"
        }
    })
    users: User[]
}