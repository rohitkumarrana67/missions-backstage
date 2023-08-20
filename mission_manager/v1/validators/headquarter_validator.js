const Joi = require('joi');

module.exports = {
  headquarterIndexValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the index route for headquarters
    });
    return schema.validate(params);
  },

  headquarterShowValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the show route for headquarters
    });
    return schema.validate(params);
  },

  headquarterCreateValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the create route for headquarters
    });
    return schema.validate(params);
  },

  headquarterUpdateValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the update route for headquarters
    });
    return schema.validate(params);
  },

  headquarterDeleteValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the delete route for headquarters
    });
    return schema.validate(params);
  }
};
