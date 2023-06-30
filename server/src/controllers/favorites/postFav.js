const { Favorite } = require('../../db/database')

const postFavHandler = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender, id } = req.body.character
    if (!name || !origin || !status || !image || !species || !gender) return res.status(401).json({ error: 'Faltan datos' })
    await Favorite.findOrCreate({
      where: { name: name },
      defaults: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender
      }
    })
    const favoritesArr = await Favorite.findAll()
    return res.status(200).json({ favorites: favoritesArr })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = postFavHandler