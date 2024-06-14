const express = require('express')
const {
    createFinancialAccount,
    getFinancialAccount,
    getFinancialAccounts,
    deleteFinancialAccount,
    updateFinancialAccount
} = require('../controllers/financialAccountController')

const router = express.Router()

// GET all financialAccount information
router.get('/', getFinancialAccounts)

// GET a specific financialAccount's information
router.get('/:id', getFinancialAccount)

// POST a new financialAccount
router.post('/', createFinancialAccount)

// DELETE a financialAccount
router.delete('/:id', deleteFinancialAccount)

// UPDATE A USER
router.patch('/:id', updateFinancialAccount)

module.exports = router