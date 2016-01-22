module.exports = function(grunt) {

  grunt.initConfig({
    // connect: {
    //   server: {
    //     options: {
    //       port: 8000,
    //       base: {
    //         path: '.',
    //         options: {
    //           index: 'index.html'
    //         }
    //       }
    //     }
    //   }
    // },
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/screen.css': 'sass/screen.scss'
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
      js: {
        files: ['scripts/map.js'],
        tasks: ['browserify:dist'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass', 'watch']);

};
