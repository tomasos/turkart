module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: {
            path: '.',
            options: {
              index: 'index.html'
            }
          }
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'build/app.js': ['scripts/map.js']
        }
      }
    },
    watch: {
      files: ['scripts/map.js'],
      tasks: ['browserify:dist'],
      options: {
        livereload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);

};
