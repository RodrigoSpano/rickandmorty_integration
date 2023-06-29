const { User } = require('../../db/database')

const login = async (req, res) => {
  try {
    const { email, password } = req.query
    if (!email || !password) return res.status(400).json({ error: 'Faltan datos' })
    const findUser = await User.findOne({ where: { email } })
    if (!findUser) return res.status(404).json({ error: 'Usuario no encontrado' })
    if (findUser.password !== password) return res.status(403).json({ error: 'Contraseña incorrecta' });
    return res.status(202).json({ access: true })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = login