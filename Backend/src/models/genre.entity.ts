import { EntitySchema } from "typeorm";
import { BaseEntityInterface } from "../utils/database/base-entity-interface";
import { baseColumnSchema } from "../utils/database/base-column-schema";
import { MovieGenre } from "./movie-genre.entity";



export interface Genre extends BaseEntityInterface {
    name: string;

}

export interface GenreRelations {
    movieGenre: MovieGenre[]
}

export const GenreEntity = new EntitySchema<Genre & GenreRelations>({
    name: "genre",
    columns: {
        ...baseColumnSchema,
        name: {
            type: "varchar"
        }
    },
    relations: {
        movieGenre: {
            target: "movieGenre",
            type: "one-to-many",
            inverseSide: "genre"
        }
    }

})