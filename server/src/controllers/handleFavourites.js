
let myFavourites = []

const postFav = (req, res) => {
  const { character } = req.body
  if (character) myFavourites.push(character)
  return res.status(201).json(myFavourites)
}

const deleteFav = (req, res) => {
  try {
    const { id } = req.params
    const idExist = myFavourites?.find(el => el.id === id)
    if (!idExist) return res.status(202).json(myFavourites)
    myFavourites = myFavourites.filter(el => el.id !== +id);
    return res.status(200).json(myFavourites)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { postFav, deleteFav }