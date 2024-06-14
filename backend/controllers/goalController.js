const Goal = require('../models/goalModel')
const mongoose = require('mongoose')


// get all goals
const getGoals = async (req,res) => {
    const goals = await Goal.find({}).sort({createdAt: -1})
    res.status(200).json(goals)
}

// get a goal
const getGoal = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid goal ID"})
    }
    const goal = await Goal.findById(id)

    if (!goal) {
        return res.status(404).json({error: "No such goal"})
    }

    res.status(200).json(goal)
}

// create a new goal
const createGoal = async (req, res) => {
    const {firstName, lastName, email, password, phone} = req.body

    // add doc to db
    try {
        const goal = await Goal.create({firstName, lastName, email, password, phone})
        res.status(200).json(goal)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a goal
const deleteGoal = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid goal ID"})
    }
    const goal = await Goal.findOneAndDelete({_id: id})

    if (!goal) {
        return res.status(400).json({error: "No such goal"})
    }
    res.status(200).json(goal)
}

// update a goal
const updateGoal = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid goal ID"})
    }
    const goal = await Goal.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!goal) {
        return res.status(400).json({error: "No such goal"})
    }
    res.status(200).json(goal)
}



module.exports = {createGoal, getGoals, getGoal, deleteGoal, updateGoal}