const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "The Field `{PATH}` is required"],
    minlength: [1, "This field `{PATH}` must  be greateer  than 1 "],
    maxlength: [200, "This field `{PATH}` must be less  than  200"],
  },
  category: { type: String, minlength: 1, maxlength: 30 },
  country: { type: String, minlength: 3, maxlength: 50 },
  year: { type: Number, min: 1850, max: 2300 },
  imdb_score: { type: Number, min: 0, max: 10 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("movie",MovieSchema)