const { Favorite } = require('../../db/database')

const deleteFavHandler = async (req, res) => {
  try {
    const { id } = req.params
    await Favorite.destroy({ where: { id } })
    const favorites = await Favorite.findAll()
    return res.status(200).json({ favorites })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = deleteFavHandler