const express=require("express")

const Show=require("../models/shows.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(Show))

router.get("", crudController.getAll(Show))






module.exports=router