import { Request, Response } from "express";
import { ShowService } from "../services/show.service";
import { UUID } from "crypto";

export const ShowController = {
    async getAll(req: Request, res: Response) {
        const shows = await ShowService.getAll()
        res.json(shows)
    },
    async create(req: Request, res: Response) {
        const newShow = await ShowService.create(req.body)
        res.status(201).json(newShow);
    },
    async getById(req: Request, res: Response) {
        const show = await ShowService.getById(req.params.id as UUID)
        res.json(show)
    }
}