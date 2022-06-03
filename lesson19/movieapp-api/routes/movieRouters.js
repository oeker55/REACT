const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/top10", movieController.getTop10Movie);

router.get("/", movieController.getAllMovie);

router.get("/:movieId", movieController.getSingleMovie);
router.get("/:startYear/:endYear", movieController.getMovieAtBetweenYears);
router.post("/", movieController.addNewMovie);
router.put("/:movieId", movieController.updateMovie);

router.delete("/:movieId", movieController.deleteMovie);

/*
router.post('/', (req, res, next) => {

const newMovie = new MovieModel({
    title : req.body.title,
    imdb_score : req.body.imdb_score,
    category : req.body.category,
    country : req.body.country,
    year : req.body.year

})
newMovie.save((err, data)=>{
     if (err) {
        res.json(err)
        
    } 
     res.json(data)

})



})


*/

module.exports = router;
