const app=require('./index')

const connect=require("./configs/db")

app.listen(2245,async function(){
    await connect()

    console.log("listening to port 2245")
})