module.exports = function (grunt) {

  grunt.initConfig({
    cssmin: {
      all: {
        src: ['assets/css/*', '!assets/css/blog.min.css'],
        dest: 'assets/css/blog.min.css'
      }
    },

    uglify: {
      all: {
        files: {
          'assets/js/blog.min.js': ['assets/js/*', '!assets/js/blog.min.js']
        }
      }
    },

    'cache-busting': {
      cssDev: {
        replace: ['default.hbs'],
        replacement: 'blog.min.css',
        file: 'assets/css/blog.min.css',
        get_param: true
      },

      jsDev: {
        replace: ['default.hbs'],
        replacement: 'blog.min.js',
        file: 'assets/js/blog.min.js',
        get_param: true
      },
    }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-cache-busting");

  grunt.registerTask("default", [
    'cssmin',
    'uglify',
    'cache-busting'
  ]);
};
