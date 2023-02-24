'use strict';

/**
 * original-film service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::original-film.original-film');
