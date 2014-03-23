/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: ['Gruntfile.js', 'tasks/*.js']
      },
      app: {
        src: ['*.js', 'lib/*.js']
      }
    },

    jscs: {
      options: {
        config: '.jscs.json'
      },
      gruntfile: {
        src: '<%= jshint.gruntfile.src %>'
      },
      app: {
        src: '<%= jshint.app.src %>'
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile', 'jscs:gruntfile']
      },
      app: {
        files: '<%= jshint.app.src %>',
        tasks: ['jshint:app', 'jscs:app']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs-checker');

  grunt.registerTask('lint', ['jshint', 'jscs']);

  // Default task.
  grunt.registerTask('default', ['lint']);

};
