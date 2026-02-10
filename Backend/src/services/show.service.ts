import { UUID } from "crypto";
import { AppDataSource } from "../database/data-source";
import { Show, ShowEntity } from "../models/shows.entity";

const repo = AppDataSource.getRepository(ShowEntity);

export const ShowService = {
    async getAll() {
        return await repo.find()
    },

    async getById(id: UUID) {
        return await repo.findOne({ where: { id: id } })
    },

    async create(data: Partial<Show>) {
        const show = repo.create(data)
        return await repo.save(show)
    },



}