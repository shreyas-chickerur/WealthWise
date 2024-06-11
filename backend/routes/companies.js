const express = require('express')
const {
    createCompany,
    getCompany,
    getCompanies,
    deleteCompany,
    updateCompany
} = require('../controllers/companyController')

const router = express.Router()

// GET all company information
router.get('/', getCompanies)

// GET a specific company's information
router.get('/:id', getCompany)

// POST a new company
router.post('/', createCompany)

// DELETE a company
router.delete('/:id', deleteCompany)

// UPDATE A COMPANY
router.patch('/:id', updateCompany)

module.exports = router