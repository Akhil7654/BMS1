const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")
const registerSchema = new schema({
    name : String,
    registerNumber : Number,
    address : String,
    department : String,
    semester :Number,
    boardingPoint : String,
    password : String,
    confirmPassword : String
})
var register = Mongoose.model("registers",registerSchema);
module.exports = {register}