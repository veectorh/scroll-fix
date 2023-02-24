'use strict';

/**
 * virtual-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::virtual-event.virtual-event');
