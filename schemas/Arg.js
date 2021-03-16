const Joi = require('joi');
const { Suggestion } = require('./Suggestion');
const { Generator } = require('./Generator');

const Arg = Joi.object({
    name: Joi.string(),
    displayName: Joi.string(),
    insertValue: Joi.string().allow(''),
    description: Joi.string().optional().allow(''),
    icon: Joi.string(),
    suggestions: Joi.array().items(Suggestion),
<<<<<<< HEAD
    template: Joi.alternatives().try(Joi.string().valid("filepaths", "folders"), Joi.array().items(Joi.string().valid("filepaths", "folders"))),
    generators: Joi.alternatives().try(Generator, Joi.array().items(Generator)),
    generator: Joi.alternatives().try(Generator),
    variadic: Joi.boolean(),
<<<<<<< HEAD
    isOptional: Joi.boolean()
=======
    template: Joi.string().valid("filepaths", "folders"),
    generator: Joi.alternatives().try(Generator, Joi.array().items(Generator)),
    generators: Joi.alternatives().try(Generator, Joi.array().items(Generator)),
    variadic: Joi.boolean(),
    isOptional: Joi.boolean(),
>>>>>>> bd96711... linter fix
=======
    isOptional: Joi.boolean(),
    isCommand: Joi.boolean()
>>>>>>> 013e760... feat: isCommand field for Arg
})

module.exports = { Arg };