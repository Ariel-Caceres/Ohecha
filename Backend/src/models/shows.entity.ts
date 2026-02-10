import { EntitySchema } from "typeorm"
import { BaseEntityInterface } from "../utils/database/base-entity-interface";
import { baseColumnSchema } from "../utils/database/base-column-schema";

export interface Show extends BaseEntityInterface {
    title: string;
    description: string;
    airDate: Date;
    genre: string[];
    seasons: number;
    rating: number;
    language: string;
    cast: string;
}

export const ShowEntity = new EntitySchema<Show>({
    name: "show",
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
        rating: {
            type: "int",
        },
        genre: {
            type: "varchar",
        },
        language: {
            type: "varchar"
        },
        createdAt: {
            type: "date",
            createDate: true
        },
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid"

        },
        updatedAt: {
            type: "date",
            updateDate: true
        },
        seasons: {
            type: "int"
        }


    },

})