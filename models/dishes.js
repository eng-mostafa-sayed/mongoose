const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const dishSchema = new Schema({
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true, unique: false },
    }, //end of the first schema element, then the time stamp
    {
        timestamps: true,
    }
); //end of the schema

//construct a model of this schema(nameOfModule,schemaModule) and export it from this file to be imported in our application
var Dishes = Mongoose.model("Dish", dishSchema);
module.exports = Dishes;