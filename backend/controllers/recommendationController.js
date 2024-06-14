const Recommendation = require('../models/recommendationModel')
const mongoose = require('mongoose')


// get all recommendations
const getRecommendations = async (req,res) => {
    const recommendations = await Recommendation.find({}).sort({createdAt: -1})
    res.status(200).json(recommendations)
}

// get a recommendation
const getRecommendation = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid recommendation ID"})
    }
    const recommendation = await Recommendation.findById(id)

    if (!recommendation) {
        return res.status(404).json({error: "No such recommendation"})
    }

    res.status(200).json(recommendation)
}

// create a new recommendation
const createRecommendation = async (req, res) => {
    const {firstName, lastName, email, password, phone} = req.body

    // add doc to db
    try {
        const recommendation = await Recommendation.create({firstName, lastName, email, password, phone})
        res.status(200).json(recommendation)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a recommendation
const deleteRecommendation = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid recommendation ID"})
    }
    const recommendation = await Recommendation.findOneAndDelete({_id: id})

    if (!recommendation) {
        return res.status(400).json({error: "No such recommendation"})
    }
    res.status(200).json(recommendation)
}

// update a recommendation
const updateRecommendation = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid recommendation ID"})
    }
    const recommendation = await Recommendation.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!recommendation) {
        return res.status(400).json({error: "No such recommendation"})
    }
    res.status(200).json(recommendation)
}



module.exports = {createRecommendation, getRecommendations, getRecommendation, deleteRecommendation, updateRecommendation}