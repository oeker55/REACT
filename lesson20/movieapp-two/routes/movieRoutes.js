const express = require('express')
const router = express.Router()
const movieController = require("../controllers/movieController")



router.get('/', movieController.getAllMovie)
router.get('/:movieId', movieController.getSingleMovie )
router.delete('/:movieId', movieController.deleteMovie)
router.put('/:movieId', movieController.updateMovie)
router.post('/',movieController.addNewMovie )


module.exports = router;