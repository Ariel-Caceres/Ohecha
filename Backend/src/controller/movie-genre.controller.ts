import { Request, Response } from "express";
import { movieGenreService } from "../services/movie-genre.service";


export const movieGenreController = {
    async create(req: Request, res: Response) {
        res.json("creado con éxito el movie.genre")
    }
}