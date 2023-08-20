"use strict"

const SoldierService = require('../services/soldier_service');
const { soldierCreateValidator } = require('../validators/soldier_validator')

module.exports = {
  index: (req, res) => {
  },

  show: (req, res) => {
  },

  create: (req, res) => {
    soldierCreateValidator(req).then((params) => {
      console.log(params)
    }).catch((error) => {

    })
  },

  update: (req, res) => {
  },

  delete: (req, res) => {
  }
}