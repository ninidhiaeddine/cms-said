'use strict';

/**
 * step-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::step-counter.step-counter');
