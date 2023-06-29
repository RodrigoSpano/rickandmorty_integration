const express = require('express')
const postFav = require('../../controllers/favorites/postFav')
const deleteFav = require('../../controllers/favorites/deleteFav')

const router = express.Router()

router.post('/', postFav)
router.delete('/:id', deleteFav)

module.exports = router