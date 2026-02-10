import "reflect-metadata";
import { DataSource } from "typeorm";
import { MovieEntity } from "../models/movie.entity";
import { ShowEntity } from "../models/shows.entity";
import { GenreEntity } from "../models/genre.entity";
import { MovieGenreEntity } from "../models/movie-genre.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [MovieEntity, ShowEntity, GenreEntity, MovieGenreEntity],
});
