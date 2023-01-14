'use strict';

/**
 * step-counter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::step-counter.step-counter');
