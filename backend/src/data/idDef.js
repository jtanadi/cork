const Sequelize = require("sequelize")
const { UUID, UUIDV4 } = Sequelize

module.exports = {
  type: UUID,
  defaultValue: UUIDV4,
  primaryKey: true,
}
