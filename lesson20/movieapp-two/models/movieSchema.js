const mongoose = require("mongoose")
const Schema = mongoose.Schema



const movieShema = new Schema({
    id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:[true, "title field is required"],
        minlength:2,
        maxlength:30

    },
    cover:{
        type:String,
        required:[true, "cover field is required"]
    }


})

module.exports = mongoose.model("movies", movieShema )