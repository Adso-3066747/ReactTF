const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mysql=require('mysql2/promise')

var app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const db={
    host:'localhost',
    user:'root',
    pass:'',
    database:'Tienda1'
}

app.post('/crear', async (req,res)=>{
    const {Nom,Tel,Cor}=req.body
    try{
        conect= await mysql.createConnection(db)
        await conect.execute('INSERT INTO Usuarios(Nombre,Telefono,Correo) VALUES(?,?,?)',[Nom,Tel,Cor])
        return res.status(201).json({
            success:true,
            message:'Usuario Creado'
        })
    }
    catch(err){
        console.error(err)
    }
    finally{
        if(conect)await conect.end()
    }
})
app.listen(8000,()=>{
    console.log("API OK")
})