const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const heroShema = new Schema({

  heroId:{
    type: Number,
    required: true,
    unique : true
  },
  namehero: {
    type: String,
    required : true,
    maxLength : 30
  },
  imgHero: {
    type: String,
    required : false
  },
})

const Hero = mongoose.model('Hero',heroShema)

module.exports = Hero

