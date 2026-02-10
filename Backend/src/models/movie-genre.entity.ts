import { UUID } from "crypto";
import { BaseEntityInterface } from "../utils/database/base-entity-interface";
import { EntitySchema } from "typeorm";
import { baseColumnSchema } from "../utils/database/base-column-schema";
import { Movie } from "./movie.entity";
import { Genre } from "./genre.entity";

// export interface MovieGenre extends BaseEntityInterface {
//     movieId: UUID;
//     genreId: UUID;
// }

// export interface MovieGenreRelations {
//     movie: Movie;
//     genre: Genre;
// }

// export const MovieGenreEntity = new EntitySchema<MovieGenre & MovieGenreRelations>({
//     name: "movieGenre",
//     columns: {
//         ...baseColumnSchema,
//         movieId: {
//             type: "uuid"
//         },
//         genreId: {
//             type: "uuid"
//         }
//     }, relations: {
//         movie: {
//             type: "many-to-one",
//             target: "movie",
//             inverseSide: "movieGenre",
//             eager: true

//         },
//         genre: {
//             type: "many-to-one",
//             target: "genre",
//             inverseSide: "movieGenre"

//         }
//     }
// })

export interface MovieGenre extends BaseEntityInterface { }

export interface MovieGenreRelations {
    movie: Movie;
    genre: Genre;
}

export const MovieGenreEntity = new EntitySchema<MovieGenre & MovieGenreRelations>({
    name: "movieGenre",
    columns: {
        ...baseColumnSchema,
    },
    relations: {
        movie: {
            type: "many-to-one",
            target: "movie",
            joinColumn: { name: "movieId" },
            inverseSide: "movieGenre",
        },
        genre: {
            type: "many-to-one",
            target: "genre",
            joinColumn: { name: "genreId" },
            inverseSide: "movieGenre",
        }
    }
});
