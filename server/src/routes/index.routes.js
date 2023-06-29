const express = require('express')
const { getCharById } = require('../controllers/getCharById')
const { loginController } = require('../controllers/login')
const favouritesRoute = require('./subRoutes/favourites.routes')

const router = express.Router()

router.get('/character/:id', getCharById)
router.get('/login', loginController)
router.use('/fav', favouritesRoute)

module.exports = router