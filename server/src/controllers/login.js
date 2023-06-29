const users = require('../utils/users')

const loginController = (req, res) => {
  const { email, password } = req.query
  let findUser = users?.find(el => el.email === email)
  if (findUser) {
    if (findUser.password === password) return res.status(200).json({ access: true })
  }
  return res.status(202).json({ access: false })
}

module.exports = {
  loginController
}