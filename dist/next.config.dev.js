"use strict";

var path = require('path');

var nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
module.exports = nextConfig;