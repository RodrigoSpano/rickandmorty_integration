const express = require('express')
const { getCharById } = require('../controllers/character/getCharById')
const signupController = require('../controllers/auth/postUser')
const loginController = require('../controllers/auth/login')
const favouritesRoute = require('./subRoutes/favourites.routes')

const router = express.Router()

router.get('/character/:id', getCharById)
router.get('/login', loginController)
router.post('/login', signupController)
router.use('/fav', favouritesRoute)

module.exports = router