import { AppDataSource } from "../database/data-source";
import { Genre, GenreEntity } from "../models/genre.entity";

const repo = AppDataSource.getRepository(GenreEntity)

export const GenreService = {
    async create(data: Partial<Genre>) {
        const genre = repo.create(data)
        return await repo.save(genre)
    },

    async getGenresId() {
        const genresId = repo.find()
    },

    async getAll() {
        const genres = await repo.find()
        return genres
    }
}