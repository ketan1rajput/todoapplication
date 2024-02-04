const mongoose = require("mongoose");
//

mongoose.connect("mongodb+srv://ke8920603717:mysql@cluster0.jskouww.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}