const postgres = require('postgres')
const sql = postgres('postgres://postgres:postgres@localhost:5432/postgres')

export default sql
