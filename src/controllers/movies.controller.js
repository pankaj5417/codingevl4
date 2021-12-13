const express=require("express")

const Movie=require("../models/movies.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(Movie))

router.get("", crudController.getAll(Movie))






module.exports=router