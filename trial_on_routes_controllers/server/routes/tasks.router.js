const express = require('express');
const Task = require("../models/tasks.model");
const router = express.Router();
const {getAllTasks} = require("../controllers/task.controller")

// get all tasks
router.get("/", getAllTasks)

// router.get(/)

module.exports = router;



