import { AppDataSource } from "../database/data-source"
import { MovieGenre, MovieGenreEntity } from "../models/movie-genre.entity"

const repo = AppDataSource.getRepository(MovieGenreEntity)

export const movieGenreService = {
    async create(data: Partial<MovieGenre>) {
        const auxGenre = repo.create(data)
        return await repo.save(auxGenre)
    }
}