import { Router } from "express";
import { MovieController } from "../controller/movie.controller";
import { ShowController } from "../controller/show.controller";
import { genreController } from "../controller/genre.controller";
import { movieGenreController } from "../controller/movie-genre.controller";

const router = Router();

router.get("/movies", MovieController.getAll);
router.get("/movieLatest", MovieController.getLatest);
router.get("/movie/:id", MovieController.getById);

router.get("/genres", MovieController.getGenres)
router.get("/shows", ShowController.getAll)
router.get("/show/:id", ShowController.getById)


router.delete("/movie/:id", MovieController.deleteById);

router.put("/movie/:id", MovieController.updateById);


router.post("/movie", MovieController.create);
router.post("/movie-genre", movieGenreController.create)
router.post("/genre", genreController.create)
router.post("/show", ShowController.create)

export default router;
