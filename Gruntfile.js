module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json')
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('lint', ['validate-shrinkwrap', 'jshint', 'jscs', 'jsonlint']);

  grunt.registerTask('default', ['lint']);
};
