module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-jscs-checker');

  grunt.config('jscs', {
    options: {
      config: '.jscs.json'
    },
    gruntfile: '<%= jshint.gruntfile.src %>',
    app: '<%= jshint.app.src %>'
  });
};
