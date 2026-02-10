import { EntitySchemaColumnOptions } from "typeorm";


export const baseColumnSchema = {

    id: {
        type: "uuid",
        primary: true,
        generated: "uuid"
    } as EntitySchemaColumnOptions,
    createdAt: {
        type: "date",
        createDate: true
    } as EntitySchemaColumnOptions,
    updatedAt: {
        type: "date",
        updateDate: true
    } as EntitySchemaColumnOptions

}