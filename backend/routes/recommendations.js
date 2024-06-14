const express = require('express')
const {
    createRecommendation,
    getRecommendation,
    getRecommendations,
    deleteRecommendation,
    updateRecommendation
} = require('../controllers/recommendationController')

const router = express.Router()

// GET all recommendation information
router.get('/', getRecommendations)

// GET a specific recommendation's information
router.get('/:id', getRecommendation)

// POST a new recommendation
router.post('/', createRecommendation)

// DELETE a recommendation
router.delete('/:id', deleteRecommendation)

// UPDATE A USER
router.patch('/:id', updateRecommendation)

module.exports = router