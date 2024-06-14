const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()

// GET all user information
router.get('/', getUsers)

// GET a specific user's information
router.get('/:id', getUser)

// POST a new user
router.post('/', createUser)

// DELETE a user
router.delete('/:id', deleteUser)

// UPDATE A USER
router.patch('/:id', updateUser)

module.exports = router