const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Place = require('../models/place')

// Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/map', (req, res) => res.render('map/map'))
router.get('/api/places', (req, res) => {
  Place
    .find()
    .then(data => res.json(data))
    .catch(err => console.log(err))
})


module.exports = router
