//  a database is similar to a database
// a collection is similar to a table || true
// Schema: In MongoDB itself, collections are schemaless. However, when using Mongoose (a Node.js ODM), a schema defines the structure of documents within a collection.


const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
    {
        task_name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        task_description: {
            type:String,
            required:true,
        },
        task_startDate: {
            type:Date,
            required:true,
        }, 
        task_endDate: {
            type:Date,
            required:true
        },
        status:{
            type:String,
            required:false
        },
        priority:{
            type:Number,
            required:true
        },
        assignee: {
            type:String,
            required:true,
            default:"Owner"
        }
    },
    {
        timestamps: true
    }
)

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;