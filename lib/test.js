var CONFIG = require('./config.json');

exports.foo = function () {
  'use strict';
  return 'foo';
};

exports.bar = function () {
  'use strict';
  return 'bar';
};

exports.name = function () {
  'use strict';
  return CONFIG.name.trim();
};
