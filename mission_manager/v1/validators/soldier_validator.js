const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
  soldierIndexValidator: (params) => {
  },

  soldierShowValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the show route for soldiers
    });
    return schema.validate(params);
  },

  soldierCreateValidator: (req) => {
    console.log(req.body)
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      firstName: Joi.string(),
      MiddleName: Joi.string(),
      LastName: Joi.string(),
      profileImage: Joi.string(),
      role: Joi.string().valid('soldier', 'chief').default('soldier'),
      forces: Joi.array().items(Joi.objectId())
    });
    return schema.validateAsync(req.body);
  },

  soldierUpdateValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the update route for soldiers
    });
    return schema.validate(params);
  },

  soldierDeleteValidator: (params) => {
    const schema = Joi.object({
      // Define the validation rules for the params used in the delete route for soldiers
    });
    return schema.validate(params);
  }
};
