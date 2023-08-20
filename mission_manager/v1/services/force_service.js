"use strict";

const ForceEntity     = require('../entity_builders/force_entity');
const ForceDispatcher = require('../data_dispatchers/force_dispatcher');

function ForceService() {
  this.entity_builder = new ForceEntity();
  this.dispatcher     = new ForceDispatcher();
}

ForceService.prototype.index = async function (options) {
  const dispatcher_data = await this.dispatcher.index(options);
  return this.entity_builder.index(dispatcher_data);
};

ForceService.prototype.show = async function (options) {
  const dispatcher_data = await this.dispatcher.show(options);
  return this.entity_builder.show(dispatcher_data);
};

ForceService.prototype.create = async function (options) {
  const dispatcher_data = await this.dispatcher.create(options);
  return this.entity_builder.create(dispatcher_data);
};

ForceService.prototype.update = async function (options) {
  const dispatcher_data = await this.dispatcher.update(options);
  return this.entity_builder.update(dispatcher_data);
};

ForceService.prototype.delete = async function (options) {
  return this.dispatcher.delete(options);
};

module.exports = ForceService;
