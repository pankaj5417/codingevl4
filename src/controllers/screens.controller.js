const express=require("express")

const Screen=require("../models/screens.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(Screen))

router.get("", crudController.getAll(Screen))






module.exports=router