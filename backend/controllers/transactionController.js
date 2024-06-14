const Transaction = require('../models/transactionModel')
const mongoose = require('mongoose')


// get all transactions
const getTransactions = async (req,res) => {
    const transactions = await Transaction.find({}).sort({createdAt: -1})
    res.status(200).json(transactions)
}

// get a transaction
const getTransaction = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid transaction ID"})
    }
    const transaction = await Transaction.findById(id)

    if (!transaction) {
        return res.status(404).json({error: "No such transaction"})
    }

    res.status(200).json(transaction)
}

// create a new transaction
const createTransaction = async (req, res) => {
    const {firstName, lastName, email, password, phone} = req.body

    // add doc to db
    try {
        const transaction = await Transaction.create({firstName, lastName, email, password, phone})
        res.status(200).json(transaction)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a transaction
const deleteTransaction = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid transaction ID"})
    }
    const transaction = await Transaction.findOneAndDelete({_id: id})

    if (!transaction) {
        return res.status(400).json({error: "No such transaction"})
    }
    res.status(200).json(transaction)
}

// update a transaction
const updateTransaction = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid transaction ID"})
    }
    const transaction = await Transaction.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!transaction) {
        return res.status(400).json({error: "No such transaction"})
    }
    res.status(200).json(transaction)
}



module.exports = {createTransaction, getTransactions, getTransaction, deleteTransaction, updateTransaction}