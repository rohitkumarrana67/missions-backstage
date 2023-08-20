const Joi = require('joi');

module.exports = {
  forceIndexValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the index route for forces
    });
    return schema.validate(params);
  },

  forceShowValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the show route for forces
    });
    return schema.validate(params);
  },

  forceCreateValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the create route for forces
    });
    return schema.validate(params);
  },

  forceUpdateValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the update route for forces
    });
    return schema.validate(params);
  },

  forceDeleteValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the delete route for forces
    });
    return schema.validate(params);
  }
};
