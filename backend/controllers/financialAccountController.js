const FinancialAccount = require('../models/financialAccountModel')
const mongoose = require('mongoose')


// get all financialAccounts
const getFinancialAccounts = async (req,res) => {
    const financialAccounts = await FinancialAccount.find({}).sort({createdAt: -1})
    res.status(200).json(financialAccounts)
}

// get a financialAccount
const getFinancialAccount = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid financialAccount ID"})
    }
    const financialAccount = await FinancialAccount.findById(id)

    if (!financialAccount) {
        return res.status(404).json({error: "No such financialAccount"})
    }

    res.status(200).json(financialAccount)
}

// create a new financialAccount
const createFinancialAccount = async (req, res) => {
    const {firstName, lastName, email, password, phone} = req.body

    // add doc to db
    try {
        const financialAccount = await FinancialAccount.create({firstName, lastName, email, password, phone})
        res.status(200).json(financialAccount)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a financialAccount
const deleteFinancialAccount = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid financialAccount ID"})
    }
    const financialAccount = await FinancialAccount.findOneAndDelete({_id: id})

    if (!financialAccount) {
        return res.status(400).json({error: "No such financialAccount"})
    }
    res.status(200).json(financialAccount)
}

// update a financialAccount
const updateFinancialAccount = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid financialAccount ID"})
    }
    const financialAccount = await FinancialAccount.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!financialAccount) {
        return res.status(400).json({error: "No such financialAccount"})
    }
    res.status(200).json(financialAccount)
}



module.exports = {createFinancialAccount, getFinancialAccounts, getFinancialAccount, deleteFinancialAccount, updateFinancialAccount}