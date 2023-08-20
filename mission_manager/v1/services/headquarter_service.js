"use strict";

const HeadquarterEntity     = require('../entity_builders/headquarter_entity');
const HeadquarterDispatcher = require('../data_dispatchers/headquarter_dispatcher');

function HeadquarterService() {
  this.entity_builder = new HeadquarterEntity();
  this.dispatcher     = new HeadquarterDispatcher();
}

HeadquarterService.prototype.index = async function (options) {
  const dispatcher_data = await this.dispatcher.index(options);
  return this.entity_builder.index(dispatcher_data);
};

HeadquarterService.prototype.show = async function (options) {
  const dispatcher_data = await this.dispatcher.show(options);
  return this.entity_builder.show(dispatcher_data);
};

HeadquarterService.prototype.create = async function (options) {
  const dispatcher_data = await this.dispatcher.create(options);
  return this.entity_builder.create(dispatcher_data);
};

HeadquarterService.prototype.update = async function (options) {
  const dispatcher_data = await this.dispatcher.update(options);
  return this.entity_builder.update(dispatcher_data);
};

HeadquarterService.prototype.delete = async function (options) {
  return this.dispatcher.delete(options);
};

module.exports = HeadquarterService;
