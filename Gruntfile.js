module.exports = function (grunt) {

  var client = 'client-sample';
  var bower = client + '/spec/bower_components';

  var js = client + '/assets/js';

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    jasmine: {
      run: {
        src: [
          js + '/developer-toolkit.js',
          js + '/controllers/**/*.js'],
        options: {
          specs: client + '/spec/specs/**/*-spec.js',
          keepRunner: true,
          vendor: [
            bower + '/angular/angular.js',
            bower + '/angular-resource/angular-resource.js',
            bower + '/angular-mocks/angular-mocks.js',

          ]
        }
      }
    }
  };

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('test', [ 'jasmine']);

};