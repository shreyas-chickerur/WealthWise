const express = require('express')
const {
    createGoal,
    getGoal,
    getGoals,
    deleteGoal,
    updateGoal
} = require('../controllers/goalController')

const router = express.Router()

// GET all goal information
router.get('/', getGoals)

// GET a specific goal's information
router.get('/:id', getGoal)

// POST a new goal
router.post('/', createGoal)

// DELETE a goal
router.delete('/:id', deleteGoal)

// UPDATE A USER
router.patch('/:id', updateGoal)

module.exports = router