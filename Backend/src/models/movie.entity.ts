import { EntitySchema } from "typeorm"
import { BaseEntityInterface } from "../utils/database/base-entity-interface";
import { baseColumnSchema } from "../utils/database/base-column-schema";
import { MovieGenre } from "./movie-genre.entity";


export interface Movie extends BaseEntityInterface {
    title: string;
    description: string;
    airDate: Date;
    duration: number;
    rating: number;
    language: string;
    cast: string;
    imgUrlPanoramic: string,
    imgUrlCover: string,
}

export interface MovieRelations {
    movieGenre: MovieGenre[];
}

export const MovieEntity = new EntitySchema<Movie & MovieRelations>({
    name: "movie",
    columns: {
        ...baseColumnSchema,
        title: {
            type: "varchar",
        },
        description: {
            type: "varchar"
        },
        airDate: {
            type: "date"
        },
        cast: {
            type: "varchar"
        },
        duration: {
            type: "int"
        },
        rating: {
            type: "int",
        },

        language: {
            type: "varchar"
        },
        imgUrlCover: {
            type: "varchar"
        },
        imgUrlPanoramic: {
            type: "varchar"
        },

    },
    relations: {
        movieGenre: {
            target: "movieGenre",
            type: "one-to-many",
            inverseSide: "movie"
        }
    }
})