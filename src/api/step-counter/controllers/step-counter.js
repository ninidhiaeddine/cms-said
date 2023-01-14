'use strict';

/**
 * step-counter controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::step-counter.step-counter');
