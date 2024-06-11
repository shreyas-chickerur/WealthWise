const Company = require('../models/companyModel')
const mongoose = require('mongoose')


// get all companies
const getCompanies = async (req,res) => {
    const companies = await Company.find({}).sort({createdAt: -1})
    res.status(200).json(companies)
}

// get a company
const getCompany = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid company ID"})
    }
    const company = await Company.findById(id)

    if (!company) {
        return res.status(404).json({error: "No such company"})
    }

    res.status(200).json(company)
}

// create a new company
const createCompany = async (req, res) => {
    const {name, industry, description, location, website, contactEmail, contactPhone} = req.body

    // add doc to db
    try {
        const company = await Company.create({name, industry, description, location, website, contactEmail, contactPhone})
        res.status(200).json(company)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a company
const deleteCompany = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid company ID"})
    }
    const company = await Company.findOneAndDelete({_id: id})

    if (!company) {
        return res.status(400).json({error: "No such company"})
    }
    res.status(200).json(company)
}

// update a company
const updateCompany = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid company ID"})
    }
    const company = await Company.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!company) {
        return res.status(400).json({error: "No such company"})
    }
    res.status(200).json(company)
}



module.exports = {createCompany, getCompanies, getCompany, deleteCompany, updateCompany}