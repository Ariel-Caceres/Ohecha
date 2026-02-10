import { Request, Response } from "express";
import { MovieService } from "../services/movie.service";
import { UUID } from "crypto";
import { Movie } from "../models/movie.entity";
import { movieGenreService } from "../services/movie-genre.service";
import { late, promise } from "zod";
import { title } from "process";
import { GenreService } from "../services/genre.service";
import { GenreEntity } from "../models/genre.entity";



export const MovieController = {
    async getAll(req: Request, res: Response) {
        const movies = await MovieService.getAll();
        res.json(movies);
    },

    async getById(req: Request, res: Response) {
        const movie = await MovieService.getById(req.params.id as UUID)
        if (!movie) throw new Error("No se encontró la película")



        const movieP = {
            airDate: movie.airDate,
            cast: movie.cast,
            duration: movie.duration,
            title: movie.title,
            description: movie.description,
            rating: movie.rating,
            language: movie.language,
            id: movie.id,
            imgUrlCover: movie.imgUrlCover,
            imgUrlPanoramic: movie.imgUrlPanoramic,
            movieGenre: movie.movieGenre,
        }
        res.json(movieP)
    },

    async updateById(req: Request, res: Response) {
        await MovieService.updateById(req.params.id as UUID, req.body)
        res.status(200).json("todo ok")
    },

    async create(req: Request, res: Response) {
        const movie = await MovieService.create(req.body)
        req.body.genres.forEach(async (g: UUID) => {
            await movieGenreService.create({ movieId: movie.id, genreId: g })
        });
        res.status(201).json("creado con éxito")
    },

    async deleteById(req: Request, res: Response) {
        await MovieService.deleteById(req.params.id as UUID)
        res.status(200).json("borrado con éxito")
    },

    async getLatest(req: Request, res: Response) {
        const moviesArray = await MovieService.getLatest()
        const latestMovies = moviesArray.map((movie) => {
            return {
                title: movie.title,
                rating: movie.rating,
                airDate: movie.airDate,
                id: movie.id,
                imgPanoramic: movie.imgUrlPanoramic
            }
        })
        res.json(latestMovies)
    },

    async getGenres(req: Request, res: Response) {
        const genres = await GenreService.getAll()

        const genreRes = await Promise.all(
            genres.map(async g => {
                const moviesRaw = await MovieService.getMoviesByGenreName(g.name)
                const movies = moviesRaw.map((g) => {
                    return {
                        id: g.id,
                        title: g.title,
                        description: g.description,
                        airDate: g.airDate,
                        rating: g.rating,
                        imgUrlCover: g.imgUrlCover,
                    }
                })
                return { name: g.name, data: movies }
            })
        )
        res.json(genreRes)
    }
}
