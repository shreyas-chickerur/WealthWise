const express = require('express')
const {
    createTransaction,
    getTransaction,
    getTransactions,
    deleteTransaction,
    updateTransaction
} = require('../controllers/transactionController')

const router = express.Router()

// GET all transaction information
router.get('/', getTransactions)

// GET a specific transaction's information
router.get('/:id', getTransaction)

// POST a new transaction
router.post('/', createTransaction)

// DELETE a transaction
router.delete('/:id', deleteTransaction)

// UPDATE A USER
router.patch('/:id', updateTransaction)

module.exports = router