const express=require("express")




const userController=require("./controllers/user.controller")

const movieController=require("./controllers/movies.controller")

const screenController=require("./controllers/screens.controller")

const theatreController=require("./controllers/theatre.controller")

const showController=require("./controllers/shows.controller")

const seatController=require("./controllers/seats.controller")

const app=express()

app.use(express.json())

app.use("/users",userController)

app.use("/movies",movieController)

app.use("/theatres", theatreController)

app.use("/screens", screenController)

app.use("/shows",showController)

app.use("/seats", seatController)

module.exports=app