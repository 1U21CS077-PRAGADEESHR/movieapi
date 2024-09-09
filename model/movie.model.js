import { model, Schema } from "mongoose";

//this is schema
const schema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    }
})

//this is model

const Movie=model("movie",schema)

export default Movie