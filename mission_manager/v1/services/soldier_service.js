"use strict";

const SoldierEntity     = require('../entity_builders/soldier_entity');
const SoldierDispatcher = require('../data_dispatchers/soldier_dispatcher');

function SoldierService() {
  this.entity_builder = new SoldierEntity();
  this.dispatcher     = new SoldierDispatcher();
}

SoldierService.prototype.index = async function (options) {
  const dispatcher_data = await this.dispatcher.index(options);
  return this.entity_builder.index(dispatcher_data);
};

SoldierService.prototype.show = async function (options) {
  const dispatcher_data = await this.dispatcher.show(options);
  return this.entity_builder.show(dispatcher_data);
};

SoldierService.prototype.create = async function (options) {
  const dispatcher_data = await this.dispatcher.create(options);
  return this.entity_builder.create(dispatcher_data);
};

SoldierService.prototype.update = async function (options) {
  const dispatcher_data = await this.dispatcher.update(options);
  return this.entity_builder.update(dispatcher_data);
};

SoldierService.prototype.delete = async function (options) {
  return this.dispatcher.delete(options);
};

module.exports = SoldierService;
