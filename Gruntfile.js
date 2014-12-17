module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass:base']
      },
      js: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['jshint:all']
      }
    },
    sass: {
      base: {
        files: {
          'mfb/src/styles/style.css': 'mfb/src/styles/style.scss'          
        }
      }
    },

    clean: {
      check: ['.grunt/grunt-gh-pages/gh-pages/check']
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        background: false
      }
    },

    jshint: {
      options: {
        jshintrc : true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },    

    livePages: ['index.html', 'index.css', 'mfb-directive.js', 'styles/*.css', '**/*.map'],
    'gh-pages': {
      options: {
        base: 'src',
      },
      'live': {
        src: ['<%= livePages %>'] 
      },
      'check': {
        options: {
          push: false
        },
        src: ['<%= livePages %>']      
      }
    }    
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');  
  grunt.loadNpmTasks('grunt-karma');    

  // Publish this to live site
  grunt.registerTask('live', ['gh-pages:live']);
  // Live site dry run: test locally before pushing.
  // In .grunt look for the folder 'check' and see if everything's ok
  grunt.registerTask('livecheck', ['clean:check','gh-pages:check']);

  grunt.registerTask('watch-css', ['watch:css']);
  grunt.registerTask('watch-js', ['watch:js']);
  grunt.registerTask('default', []);
};