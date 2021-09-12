import Joi from "joi";

const customJoi = Joi.extend((joi) => {
  return {
    type: "tuple",
    base: joi.array(),
    messages: {
      "tuple.length": "{{#label}} must be a tuple pair",
      "tuple.type": "{{#label}} must be a Javascript array",
    },
    validate(value, helpers) {
      if (!Array.isArray(value)) {
        return { value, errors: helpers.error("tuple.type") };
      }

      if (value.length !== 2) {
        return { value, errors: helpers.error("tuple.length") };
      }
    },
  };
});

export const teamSchema = Joi.array().items(
  Joi.object().keys({
    name: Joi.string().required(),
    entityType: Joi.string().required(),
    primaryItem: Joi.string().required(),
    secondaryItem: Joi.string(),
    outfit: Joi.string(),
    initialLocation: customJoi.tuple(),
  })
);

export const configSchema = Joi.object().keys({
  xAxis: Joi.number().required(),
  yAxis: Joi.number().required(),
  obstacles: Joi.number().required(),
  playerName: Joi.string().required(),
  playerEndpoint: Joi.string().uri().required(),
  teamConfiguration: teamSchema,
});
