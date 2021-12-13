const express=require("express")

const Seat=require("../models/seats.model")

const crudController=require("./crud.controller")

const router=express.Router()

router.post("", crudController.post(Seat))

//router.get("", crudController.getAll(Seat))

router.get("", crudController.getwithPopulate(Seat,{path:"show"},))






module.exports=router