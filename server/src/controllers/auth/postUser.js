const { User } = require('../../db/database')

const postUserHandler = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email && !password) return res.status(400).json({ error: 'Faltan datos' })
    const newUser = await User.findOrCreate({
      where: { email: email },
      defaults: {
        email,
        password
      }
    })
    return res.status(201).json({ user: newUser })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = postUserHandler