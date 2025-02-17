import { AppDataSource } from "../configs/data-source";

const addUserFavorite = async (userId:number, favoriteId: number) =>{
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
        await queryRunner.query(`INSERT INTO user_favorites(user_id, favorite_id) VALUES ('${userId}','${favoriteId}')`)
    } catch (error:any) {
        console.log(error)
        await queryRunner.rollbackTransaction()
        throw error
    } finally {
        await queryRunner.release()
    }
} 