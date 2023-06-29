const axios = require('axios')


const URL = process.env.RYM_URI

const getCharById = async (req, res) => {
  try {
    const { id } = req.params
    const response = await axios(`${URL}/${id}`)
    if (response.data) return res.status(200).json({ character: response.data })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getCharById
}