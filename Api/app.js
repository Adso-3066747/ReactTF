const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
var mongoose=require('mongoose')
const cors=require('cors')

var app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const conect=mongoose.connection
mongoose.connect('mongodb+srv://opm:1234@cluster0.nvvlb7t.mongodb.net/Imagenes')
conect.once('open',()=>{
    console.log("ok")
})
conect.on('error',(e)=>{
    console.log("Error:", e)
})

const Imagenes=mongoose.Schema({
    Nombre:String,
    endpoint:String
})
const Paginas=mongoose.model('Pagina',Imagenes)
app.get('/obtener', async (req,res)=>{
    try{
        const datos = await Paginas.find({}) 
        res.json(datos) 
        console.log(datos)
    }
    catch(err){
        console.error(err)
    }
})
app.listen(5000,()=>{
    console.log("API OK")
})