const Joi = require("joi");

const staffSchema = Joi.object({
  name: Joi.string().required(),
  dob: Joi.date().iso().required(),
  phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  designation: Joi.string().required(),
  qualification: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  pincode: Joi.string().required(),
});

const validateStaff = (req, res, next) => {
  const { error } = staffSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(", ");
    return res.status(400).json({ error: errorMessage });
  }
  next();
};

module.exports = {validateStaff};
