"use strict"

const mongoose = require('mongoose')
const MISSION_DATA_BANK_LOCATION = process.env['MISSION_DATA_BANK_LOCATION'] || 'mongodb://127.0.0.1:27017/MissionDataBank'

module.exports = async () => {

  const db = mongoose.connection

  db.on('connecting', () => { console.log('Connecting to MISSION_DATA_BANK.') })
  db.on('connected', () => { console.log('Connected to MISSION_DATA_BANK.') })
  db.on('error', (err) => { console.error('MISSION_DATA_BANK connection error:', err) })
  db.on('disconnected', () => { console.log('Disconnected from MISSION_DATA_BANK.'); process.exit() })

  return mongoose.connect(MISSION_DATA_BANK_LOCATION, {
    useNewUrlParser     : true,
    useUnifiedTopology  : true,
  })

}