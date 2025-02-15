import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm"
import { Favorite } from "./Favorite"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 30})
    name: string

    @Column({
        length: 100,
        unique: true
    })
    email: string

    @Column({length: 255})
    password: string

    @Column({ default: new Date(Date.now())})
    created_at: Date

    @Column({ default: null })
    updated_at: Date

    @Column({ default: null })
    deleted_at: Date

    @ManyToMany(()=> Favorite)
    favorites: Favorite[]
}