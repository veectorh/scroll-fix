'use strict';

/**
 * virtual-event router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::virtual-event.virtual-event');
