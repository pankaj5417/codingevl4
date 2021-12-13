
const post=(model)=> async( req,res)=>{

    try{

        const user=await model.create(req.body)

        return res.status(201).send(user)

    }catch(e){
        return res.status(500).json({message:e.message, status:"failed"})
    }
}

const getAll=(model)=> async( req,res)=>{

    try{

        const user= await model.find({actors:"Ajay Devgan"})

        res.status(201).send(user)

    }catch(e){
        return res.status(500).json({message:e.message, status:"failed"})
    }
}


const getwithPopulate=(model, populate1,populate2)=> async( req,res)=>{

    try{

        const user= await model.find().populate(populate1)

        res.status(201).send(user)

    }catch(e){
        return res.status(500).json({message:e.message, status:"failed"})
    }
}
module.exports={
    post,
    getAll,
    getwithPopulate,
    
}