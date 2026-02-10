import { UUID } from "crypto";
import { AppDataSource } from "../database/data-source";
import { Movie, MovieEntity } from "../models/movie.entity";

const repo = AppDataSource.getRepository(MovieEntity);

export const MovieService = {
    async getAll() {
        return await repo.find();
    },

    async create(data: Partial<Movie>) {
        const product = repo.create(data);
        return await repo.save(product);
    },

    async getById(id: UUID) {
        return await repo.findOne({ where: { id: id }, relations: ["movieGenre", "movieGenre.genre"] })
    },

    async deleteById(id: UUID) {
        return await repo.delete(id)
    },

    async updateById(id: UUID, newData: Partial<Movie>) {
        return await repo.update({ id: id }, newData)
    },

    async getLatest() {
        return await repo.find({ order: { createdAt: "DESC" }, take: 3 })
    },

    async getMoviesByGenreName(name: string) {
        return await repo
            .createQueryBuilder("movie")
            .leftJoin("movie.movieGenre", "mg")
            .leftJoin("mg.genre", "genre")
            .where("genre.name = :name", { name })
            .getMany();
    }

}
