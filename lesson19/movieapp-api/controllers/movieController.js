const movieModel = require("../models/movieSchema")

module.exports.getTop10Movie =(req, res, next) => {
    movieModel.find().limit(10).sort({imdb_score:-1})
    .then((movieList)=>{res.json(movieList)})
    .catch((err)=>{res.json(err)})
}

module.exports.getAllMovie = (req, res, next) => {
    movieModel.find()
    .then((movieList)=>{res.json(movieList)})
    .catch((err)=>{res.json(err)})
}
module.exports.getSingleMovie = (req, res, next) => {
    movieModel.findById(req.params.movieId)
        .then((movie)=>{res.json(movie)})
        .catch((err)=>{next({message:"Movie not Found !!!", status:"404" })})
}
module.exports.getMovieAtBetweenYears = (req, res, next) => {
    const {startYear, endYear} = req.params
    movieModel.find({year:{"$gte":parseInt(startYear) ,"$lte": parseInt(endYear)}})
        .then((movie)=>{res.json(movie)})
        .catch((err)=>{next({message:"Movie not Found !!!", status:"404" })})
}
module.exports.updateMovie = (req, res, next) => {
    movieModel.findByIdAndUpdate(req.params.movieId, req.body, {new:true})
        .then((movie)=>{res.json(movie)})
        .catch((err)=>{next({message:"Movie not Found !!!", status:"404" })})
}
module.exports.deleteMovie = (req, res, next) => {
    movieModel.findByIdAndRemove(req.params.movieId)
        .then((movie)=>{res.json(movie)})
        .catch((err)=>{next({message:"Movie not Found !!!", status:"404" })})
}
module.exports.addNewMovie = (req, res, next)=>{
    const newModel = new movieModel(req.body)

    newModel.save()
    .then((movie)=>{res.json(movie)})
    .catch((err)=>{res.json(err)})
}
