"use strict"

require('dotenv').config()
const MISSION_PORT              = process.env['MISSION_PORT']
const MISSION_DATA_BANK_CONNECT = require('./db/connection')
const ROUTERS                   = require('./router')

const express = require('express')
const app = express()
app.use(express.json())
app.use('/mission-manager',ROUTERS)


MISSION_DATA_BANK_CONNECT().then(() => {
  app.listen(MISSION_PORT, () => { console.log(`Mission is running on the PORT ${MISSION_PORT}`)})
}).catch((error) => {
  console.log(`Failed to connect to Mission Data Bank: ${error}`)
})
