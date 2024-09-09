import Movie from "../model/movie.model.js"

export const MovieIndex=async(req,res)=>{
    try {
        const movies=await Movie.find() 
        res.json(movies)  
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const MovieDetail=async(req,res)=>{
    try {
       const movie=await Movie.findById(req.params.id) 
       if(movie==null){
        return res.status(404).json({message:"Cannot get the movie"})
       }
       else{
        res.json(movie)
       }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const MovieCreate=async(req,res)=>{
   const newMovie=new Movie({
    title:req.body.title,
    desc:req.body.desc
   })
   try {
    const movie=await newMovie.save()
    return res.status(201).json(movie)
   } catch (error) {
    return res.status(400).json({message:error.message})
   }
} 

export const MovieUpdated=async(req,res)=>{
    try {
        const updatedMovie=await Movie.findOneAndUpdate({_id:req.params.id},
            {
                title:req.body.title,
                desc:req.body.desc
            },
            {
              new:true  
            }
        )
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const MovieDeleted=async(req,res)=>{
    const movieId=req.params.id

    try {
        await Movie.deleteOne({_id:movieId})
        res.json({message:"Movie deleted!!"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//z4WRKq2lTLkKLBK2
//mernstackdeveloper888
//mongodb+srv://<username>:<password>@cluster0.5jqxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0