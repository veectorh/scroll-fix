'use strict';

/**
 * film-program service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::film-program.film-program');
