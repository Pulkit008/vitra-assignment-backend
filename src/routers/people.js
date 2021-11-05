const express = require('express')
const { getPeopleData } = require('../controllers/people.controller')
const router = new express.Router()

router.get('/peopleData', getPeopleData)

module.exports = router