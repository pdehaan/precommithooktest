module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-nice-package');

  grunt.config('nice-package', {
    app: {
      options: {
        blankLine: true
      }
    }
  });
};
