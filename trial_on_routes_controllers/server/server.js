const express = require("express");
const app = express();
const Task = require("./models/tasks.model.js");
const cors = require('cors');
require("dotenv").config()
const path = require("node:path");
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const taskRoutes = require("./routes/tasks.router.js");;



app.use(cors("*"));


app.get("/", (req, res)=>{
    res.send("<h1>Welcome Back User</h1>")
})



app.use("/api/task",taskRoutes);

const portNumber = 5001;
const secret = process.env.TASK_SECRET;
const user = process.env.TASK_USER;

const connectMongoDB = async ()=>{

    try
    {

        await mongoose.connect(`mongodb+srv://${user}:${secret}@cluster0.iqbumv5.mongodb.net/tasks?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Connected To Database");
        if (!process.env.VERCEL)
        {
            app.listen(portNumber, ()=>{
                console.log(`Server is listening on port ${portNumber}`);
            })
        }
    }
    catch(err)
    {
        console.log("Failed to connect");
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }

}
connectMongoDB();
