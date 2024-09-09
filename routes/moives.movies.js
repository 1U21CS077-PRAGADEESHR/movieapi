import express from "express"
import { MovieCreate, MovieDeleted, MovieDetail, MovieIndex, MovieUpdated } from "../controllers/movie.controller.js"

const router=express.Router()
router.get('/',MovieIndex)

router.get("/:id",MovieDetail)

router.post('/',MovieCreate)

router.put('/:id',MovieUpdated)

router.delete('/:id',MovieDeleted)

export default router;
