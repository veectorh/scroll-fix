'use strict';

/**
 * related-speaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::related-speaker.related-speaker');
