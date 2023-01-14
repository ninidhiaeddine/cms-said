'use strict';

/**
 * medication-reminder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medication-reminder.medication-reminder');
