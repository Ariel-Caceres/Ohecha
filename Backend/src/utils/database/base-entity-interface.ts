import { UUID } from "crypto";

export interface BaseEntityInterface {
    id: UUID;
    createdAt: Date;
    updatedAt: Date;
}