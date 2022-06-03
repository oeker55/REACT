const movieSchema = require("../models/movieSchema")



module.exports.getAllMovie = (req, res) => {
    movieSchema.find()
    .then((movieList)=>{res.json(movieList)})
    .catch((err)=>{res.json(err)})

    
}
module.exports.getSingleMovie = (req, res) => {
    movieSchema.findById(req.params.movieId)
    .then((movie)=>{res.json(movie)})
    .catch((err)=>{res.json(err)})

    
}
module.exports.deleteMovie = (req, res) => {
    movieSchema.findByIdAndRemove(req.params.movieId)
    .then((movie)=>{res.json(movie)})
    .catch((err)=>{res.json(err)})

    
}
module.exports.updateMovie = (req, res) => {
    movieSchema.findByIdAndUpdate(req.params.movieId, req.body,{new:true})
    .then((movie)=>{res.json(movie)})
    .catch((err)=>{res.json(err)})

    
}
module.exports.addNewMovie = (req, res) => {

    const newMovieSchema =  movieSchema(req.body)
    
    newMovieSchema.save()
    .then((movie)=>{res.json(movie)})
    .catch((err)=>{res.json(err)})
    
    
    }
