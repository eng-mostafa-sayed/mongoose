const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

//establish connection to the DB
const url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");

    //sending new dish to the DB
    var newDish = Dishes({
        name: "Uthappizza",
        description: "test",
    });

    //saving the newdish , displaying ,remove all dishes, close conenction, catch errors
    newDish
        .save()
        .then((dish) => {
            console.log(dish);
            console.log("in sasve");
            return Dishes.find({});
        })
        .then((dishes) => {
            console.log(dishes);
            console.log("in remove");
            return Dishes.remove({});
        })
        .then(() => {
            console.log("in connection close");
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});