const express=require("express")
const app = express("")
const cors = require("cors")
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())
const PORT = 1212;

const productSchema = new mongoose.Schema(
    {
        img:String,
        title:String,
        price:String
    },
    {
        timestamps:true
    }
)

const StuffModel = mongoose.model("SaleProduct",productSchema)

app.get("/api/product",async(req,res)=>{
    try{
        const product= await StuffModel.find()
        console.log(product)
    res.send(product)
    }
    catch(err){
        res.send(err)
    }
})
app.get("/api/product/:id",async(req,res)=>{
    try{
        const {id} =req.params
        const card=StuffModel.findById(id)
    res.send(card)
    }
    catch(err){
        res.send(err)
    }
})

app.delete("/api/product/:id",async(req,res)=>{
    try{
        const {id} =req.params
        const card=StuffModel.findByIdAndDelete(id)
    res.send(card)
    }
    catch(err){
        res.send(err)
    }
})
app.post("/api/product",async(req,res)=>{
    try{
        const newStuff =new StuffModel(req.body)
        await newStuff.save()
        res.send(newStuff)
        console.log(newStuff)
    }
    catch(err){
        res.send(err)
    }
})
    

mongoose.connect("mongodb+srv://Rustamrsd:30mart5C@cluster0.dsjshza.mongodb.net/")
.then(()=>{
    console.log("connected succsesfully")
})


app.listen(PORT,()=>{
    console.log("salam123")
})