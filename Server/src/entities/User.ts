import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm"
import { Favorite } from "./Favorite"

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 30})
    name: string

    @Column({length: 100, unique: true})
    email: string

    @Column({length: 255})
    password: string

    @CreateDateColumn({type: "timestamp", nullable: true, name: "created_at"})
    createdAt: Date

    @UpdateDateColumn({type: "timestamp", nullable: true, name: "updated_at"})
    updatedAt: Date

    @DeleteDateColumn({type: "timestamp", nullable: true, name: "deleted_at"})
    deletedAt: Date

    @ManyToMany(()=> Favorite, (favorite) => favorite.users)
    favorites: Favorite[]
}