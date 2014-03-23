module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-jsonlint');

  grunt.config('jsonlint', {
    app: {
      src: [
        '.jshintrc',
        '{,lib/,tasks/}*.json'
      ]
    }
  });
};
