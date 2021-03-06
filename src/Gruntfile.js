/**
 * Gruntfile
 *
 * If you created your Sails app with `sails new foo --linker`, 
 * the following files will be automatically injected (in order)
 * into the EJS and HTML files in your `views` and `assets` folders.
 *
 * At the top part of this file, you'll find a few of the most commonly
 * configured options, but Sails' integration with Grunt is also fully
 * customizable.  If you'd like to work with your assets differently 
 * you can change this file to do anything you like!
 *
 * More information on using Grunt to work with static assets:
 * http://gruntjs.com/configuring-tasks
 */

module.exports = function (grunt) {



  /**
   * CSS files to inject in order
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * By default, Sails also supports LESS in development and production.
   * To use SASS/SCSS, Stylus, etc., edit the `sails-linker:devStyles` task 
   * below for more options.  For this to work, you may need to install new 
   * dependencies, e.g. `npm install grunt-contrib-sass`
   */

  var cssFilesToInject = [
    'linker/**/*.css'
  ];


  /**
   * General JS files that uses the User-Frontend and the Admin-Backend
   * Javascript files to inject in order
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * To use client-side CoffeeScript, TypeScript, etc., edit the 
   * `sails-linker:devJs` task below for more options.
   */

  var jsGeneralFilesToInject = [

    // Below, as a demonstration, you'll see the built-in dependencies 
    // linked in the proper order order

    // Bring in the socket.io client
    'general/js/socket.io.js',

    // then beef it up with some convenience logic for talking to Sails.js
    'general/js/sails.io.js',

    // A simpler boilerplate library for getting you up and running w/ an
    // automatic listener for incoming messages from Socket.io.
    // 'general/js/app.js',

    // *->    put other dependencies here   <-*
    'bower_components/jquery/jquery.js', // TODO remove
    //'bower_components/bootstrap/js/transition.js', // necessary? 
    // 'bower_components/async/lib/async.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/angular-sails/angular-sails.js',
    'bower_components/underscore/underscore.js',
    'bower_components/angular-underscore/angular-underscore.js',
    //'bower_components/angular-socket-io/socket.js',
    'bower_components/angular-bootstrap-toggle-switch/angular-toggle-switch.js',
    'bower_components/angular-translate/angular-translate.js',
    //'bower_components/angular-gettext/dist/angular-gettext.js', // dependencies to jQuery :(
    //'bower_components/revolunet-angular-carousel/dist/angular-mobile.js', // necessary? 
    //'bower_components/revolunet-angular-carousel/dist/angular-carousel.js',
    'bower_components/revolunet-angular-carousel/src/**/*.js',
    'bower_components/lr-notifier/src/notifier.js',
    //'bower_components/angular-ui-bootstrap3/ui-bootstrap.js',
    'bower_components/angular-strap/dist/angular-strap.js',
    // 'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
    // 'bower_components/snapjs/snap.js',
    // 'bower_components/angular-snap/angular-snap.js',
    'bower_components/angular-contenteditable/angular-contenteditable.js',
    'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
    //'bower_components/iscroll/build/iscroll.js',
    //'bower_components/ng-iScroll/src/ng-iscroll.js',
    'bower_components/angular-smoothscroll/dist/scripts/*.js',

    'bower_components/angular-loading-bar/build/loading-bar.js',

    '/bower_components/leaflet-dist/leaflet.js',
    '/bower_components/angular-leaflet-directive/dist/angular-leaflet-directive.js',

    // All of the rest of your app scripts imported here
    'general/js/angular/config.js',
    'general/js/angular/controllers.js',
    'extensions/js/controllers/**/*.js',
    'general/js/**/*.js',
  ];

  var jsAdminFilesToInject = jsGeneralFilesToInject.slice();
  jsAdminFilesToInject.push('admin/js/**/*.js');

  var jsUserFilesToInject = jsGeneralFilesToInject.slice();
  jsUserFilesToInject.push('user/js/**/*.js');

  /**
   * Client-side HTML templates are injected using the sources below
   * The ordering of these templates shouldn't matter.
   * (uses Grunt-style wildcard/glob/splat expressions)
   * 
   * By default, Sails uses JST templates and precompiles them into 
   * functions for you.  If you want to use jade, handlebars, dust, etc.,
   * edit the relevant sections below.
   */

  var templateFilesToInject = [
    'linker/**/*.html'
  ];



  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  //
  // DANGER:
  //
  // With great power comes great responsibility.
  //
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////

  // Modify css file injection paths to use 
  cssFilesToInject = cssFilesToInject.map(function (path) {
    return '.tmp/public/' + path;
  });

  // Modify js file injection paths to use 
  jsUserFilesToInject = jsUserFilesToInject.map(function (path) {
    return '.tmp/public/' + path;
  });

  jsAdminFilesToInject = jsAdminFilesToInject.map(function (path) {
    return '.tmp/public/' + path;
  });
  
  
  templateFilesToInject = templateFilesToInject.map(function (path) {
    return 'assets/' + path;
  });


  // Get path to core grunt dependencies from Sails
  var depsPath = grunt.option('gdsrc') || 'node_modules/sails/node_modules';
  grunt.loadTasks(depsPath + '/grunt-contrib-clean/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-copy/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-concat/tasks');
  grunt.loadTasks(depsPath + '/grunt-sails-linker/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-jst/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-watch/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-uglify/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-cssmin/tasks');
  //grunt.loadTasks(depsPath + '/grunt-contrib-less/tasks');
  grunt.loadTasks(depsPath + '/grunt-contrib-coffee/tasks');

  //grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      dev: {
        files: [
          {
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee)'],
          dest: '.tmp/public'
        }
        ]
      },
      build: {
        files: [
          {
          expand: true,
          cwd: '.tmp/public',
          src: ['**/*'],
          dest: 'www'
        }
        ]
      }
    },

    clean: {
      dev: ['.tmp/public/**'],
      build: ['www']
    },

    jst: {
      dev: {

        // To use other sorts of templates, specify the regexp below:
        // options: {
        //   templateSettings: {
        //     interpolate: /\{\{(.+?)\}\}/g
        //   }
        // },

        files: {
          '.tmp/public/jst.js': templateFilesToInject
        }
      }
    },

    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'assets/extensions/jade/',
            src: ['**/*.jade'],
            dest: '.tmp/public/extensions/html/',
            ext: '.html'
          }
        ]
      }
      , prod: {
        options: {
          pretty: false
        },
        files: [
          {
            expand: true,
            cwd: 'assets/extensions/jade/',
            src: ['**/*.jade'],
            dest: '.tmp/public/extensions/html/',
            ext: '.html'
          }
        ]
      }
    },

    less: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'assets/user/styles/',
            src: ['user.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }, {
            expand: true,
            cwd: 'assets/admin/styles/',
            src: ['admin.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }, {
            expand: true,
            cwd: 'assets/admin/styles/',
            src: ['signin.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }
        ]
      }
      , prod: {
        options: {
          compress: true,
        },
        files: [
          {
            expand: true,
            cwd: 'assets/user/styles/',
            src: ['user.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }, {
            expand: true,
            cwd: 'assets/admin/styles/',
            src: ['admin.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }, {
            expand: true,
            cwd: 'assets/admin/styles/',
            src: ['signin.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
          }
        ]
      }
    },
    
    coffee: {
      dev: {
        options:{
          bare:true
        },
        files: [
          {
            expand: true,
            cwd: 'assets/js/',
            src: ['**/*.coffee'],
            dest: '.tmp/public/js/',
            ext: '.js'
          }, {
            expand: true,
            cwd: 'assets/linker/js/',
            src: ['**/*.coffee'],
            dest: '.tmp/public/linker/js/',
            ext: '.js'
          }
        ]
      }
    },

    concat: {
      js: {
        src: jsUserFilesToInject,
        dest: '.tmp/public/concat/user.js'
      },
      jsAdmin: {
        src: jsAdminFilesToInject,
        dest: '.tmp/public/concat/admin.js'
      },
      css: {
        src: cssFilesToInject,
        dest: '.tmp/public/concat/production.css'
      }
    },

    uglify: {
      options: {
        mangle: false // damit angular.js module nicht kaputt geaglifyt wird
      },
      user: {
        src: ['.tmp/public/concat/production.js'],
        dest: '.tmp/public/min/production.js'
      },
      admin: {
        src: ['.tmp/public/concat/admin.js'],
        dest: '.tmp/public/min/admin.js'
      }
    },

    cssmin: {
      dist: {
        src: ['.tmp/public/concat/production.css'],
        dest: '.tmp/public/min/production.css'
      }
    },

    'sails-linker': {


      /*******************************************
       * Jade linkers (TODO: clean this up)
       *******************************************/

      devJsJADE: {
        options: {
          startTag: '//- SCRIPTS',
          endTag: '//- SCRIPTS END',
          fileTmpl: 'script(type="text/javascript", src="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': jsUserFilesToInject
        }
      },

      devJsAdminJADE: {
        options: {
          startTag: '//- SCRIPTS ADMIN',
          endTag: '//- SCRIPTS ADMIN END',
          fileTmpl: 'script(type="text/javascript", src="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': jsAdminFilesToInject
        }
      },

      prodJsJADE: {
        options: {
          startTag: '//- SCRIPTS',
          endTag: '//- SCRIPTS END',
          fileTmpl: 'script(type="text/javascript", src="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': ['.tmp/public/min/production.js']
        }
      },

      prodJsAdminJADE: {
        options: {
          startTag: '//- SCRIPTS ADMIN',
          endTag: '//- SCRIPTS ADMIN END',
          fileTmpl: 'script(type="text/javascript", src="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': ['.tmp/public/min/admin.js']
        }
      },

      devStylesJADE: {
        options: {
          startTag: '//- STYLES',
          endTag: '//- STYLES END',
          fileTmpl: 'link(rel="stylesheet", href="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': cssFilesToInject
        }
      },

      prodStylesJADE: {
        options: {
          startTag: '//- STYLES',
          endTag: '//- STYLES END',
          fileTmpl: 'link(rel="stylesheet", href="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': ['.tmp/public/min/production.css']
        }
      },

      // Bring in JST template object
      devTplJADE: {
        options: {
          startTag: '//- TEMPLATES',
          endTag: '//- TEMPLATES END',
          fileTmpl: 'script(type="text/javascript", src="%s")',
          appRoot: '.tmp/public'
        },
        files: {
          'views/**/*.jade': ['.tmp/public/jst.js']
        }
      }
      /************************************
       * Jade linker end
       ************************************/
    },

    watch: {
      api: {

        // API files to watch:
        files: ['api/**/*']
      },
      assets: {

        // Assets to watch:
        files: ['assets/**/*'],

        // When assets are changed:
        tasks: ['compileAssets', 'linkAssets']
      }
    }
  });

  // When Sails is lifted:
  grunt.registerTask('default', [
    'compileAssets',
    'linkAssets',
    'watch'
  ]);

  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'jade:dev',
    'copy:dev',    
    'coffee:dev'
  ]);

  grunt.registerTask('linkAssets', [

    // Update link/script/template references in `assets` index.html
    'sails-linker:devJsJADE',
    'sails-linker:devJsAdminJADE',
    'sails-linker:devStylesJADE',
    'sails-linker:devTplJADE'
  ]);


  // Build the assets into a web accessible folder.
  // (handy for phone gap apps, chrome extensions, etc.)
  grunt.registerTask('build', [
    'compileAssets',
    'linkAssets',
    'clean:build',
    'copy:build'
  ]);

  // When sails is lifted in production
  grunt.registerTask('prod', [
    'clean:dev',
    'jst:dev',
    'less:prod',
    'jade:prod',
    'copy:dev',
    'coffee:dev',
    'concat:js',
    'concat:jsAdmin',
    'uglify:user',
    'uglify:admin',
    'cssmin',
    'sails-linker:prodJsJADE',
    'sails-linker:prodJsAdminJADE',
    'sails-linker:prodStylesJADE',
    'sails-linker:devTplJADE'
  ]);

  // When API files are changed:
  // grunt.event.on('watch', function(action, filepath) {
  //   grunt.log.writeln(filepath + ' has ' + action);

  //   // Send a request to a development-only endpoint on the server
  //   // which will reuptake the file that was changed.
  //   var baseurl = grunt.option('baseurl');
  //   var gruntSignalRoute = grunt.option('signalpath');
  //   var url = baseurl + gruntSignalRoute + '?action=' + action + '&filepath=' + filepath;

  //   require('http').get(url)
  //   .on('error', function(e) {
  //     console.error(filepath + ' has ' + action + ', but could not signal the Sails.js server: ' + e.message);
  //   });
  // });
};
