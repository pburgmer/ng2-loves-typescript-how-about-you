'use strict';

var grunt = require('grunt');
var fabs = require('fabs');
var path = require('path');
var lodash = require('lodash');
var pkg = grunt.file.readJSON('./package.json');

module.exports = function () {
  var configFolder = path.resolve('./build-config');
  var fabsConfig = fabs.createConfig(configFolder);
  var fabsGruntConfig = fabsConfig.getGruntConfig();
  var fabsBuildConfig = fabsConfig.getBuildConfig();

  var additionalConfig = {
    replace: {
      version: {
        options: {
          prefix: '',
          patterns: [{
            match: '@@pkg.version',
            replacement: pkg.version,
            expression: false
          }]
        },
        files: [
          {
            expand: true,
            cwd: 'build-output/prepared',
            src: [ 'slides/overview.html' ],
            dest: 'build-output/prepared'
          }
        ]

      }
    }
  };
  grunt.registerTask('hookPrepareEnd', ['replace:version']);

  var gruntConfig = lodash.merge({}, fabsGruntConfig, additionalConfig);

  grunt.initConfig(gruntConfig);
};
