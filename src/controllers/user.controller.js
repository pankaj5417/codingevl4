const express=require("express")

const User=require("../models/user.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(User))

router.get("", crudController.getAll(User))


module.exports=router