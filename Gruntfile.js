module.exports = function (grunt) {

  var client = 'client-sample';
  var js = client + '/assets/js';

  var config = {
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      prepareTests: {
        command: './'+client+'/spec/install-runner-dependencies ' + client + '/spec/runner'
      }
    },

    jasmine: {
      run: {
        src: [
          js + '/developer-toolkit.js',
          js + '/controllers/**/*.js'],
        options: {
          version: '1.2.0',
          specs: client + '/spec/specs/**/*-spec.js',
          template: client + '/spec/runner/angular-runner.tmpl'
        }
      }
    }
  }

  grunt.initConfig(config);
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('test', [ 'shell:prepareTests', 'jasmine']);

}