module.exports = function (grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.config('watch', {
    gruntfile: {
      files: '<%= jshint.gruntfile.src %>',
      tasks: ['jshint:gruntfile', 'jscs:gruntfile']
    },
    app: {
      files: '<%= jshint.app.src %>',
      tasks: ['jshint:app', 'jscs:app']
    }
  });
};
