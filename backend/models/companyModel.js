const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
    name: { type: String, required: true, unique: true },
    industry: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    website: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('Company', companySchema)