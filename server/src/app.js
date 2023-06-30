const app = require('./index')
const { sequelize } = require('./db/database')

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`srv running at port ${PORT}`)
  sequelize.sync({ force: true })
})