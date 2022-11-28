const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const db = require('knex')(config)

module.exports = db
