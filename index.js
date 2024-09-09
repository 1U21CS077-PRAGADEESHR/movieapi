import express from "express"
const app=express()
const PORT=6969
import movieRoutes from './routes/moives.movies.js'
import connectDB from "./lib/db.js"

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.json({msg:"Hello world!!!"})
})

app.use("/movies",movieRoutes)

app.listen(PORT,()=>{
    console.log(`The port running successfull in ${PORT}`)
}) 