import { GenreService } from "../services/genre.service"
import { Request, Response } from "express"
export const genreController = {

    async create(req: Request, res: Response) {
        await GenreService.create(req.body)
        res.json("Creado con éxito")
    },



}

