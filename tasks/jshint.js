module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.config('jshint', {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    gruntfile: {
      src: ['Gruntfile.js', 'tasks/*.js']
    },
    app: {
      src: ['*.js', 'lib/*.js']
    }
  });
};
