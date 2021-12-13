const express=require("express")

const Theatre=require("../models/theatres.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(Theatre))

router.get("", crudController.getAll(Theatre))






module.exports=router