# Enviroment Setup #

## Goals ##
 - Compile React JSX
 - Lint JSX and JS via ESLint
 - Bundle JS and CSS files
 - Migrate the built app to the dist folder
 - Run a dev webserver
 - open the browser at your dev URL
 - Reload the browser upon save

## Install Node.js ##
1. download & install Node
2. type `npm init` and follow the instructions

## Install Gulp ##
1. `npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0`
2. create `src` and `dist` folders
  - `src` all code files
  - `dist` distributed package

## Gulp Configuration ##
1. create a file for gulp called 'gulpfile.js'
- create variables for all 3 packages installed
    ```Javascript
    var gulp = require('gulp');
    var connect = require('gulp-connect'); //Runs a local dev server
    var open = require('gulp-open'); //Open a URL in a web browser
    ```

- define a variable with configuration information
    ```Javascript
    var config = {
        port: 9005,
        devBaseUrl: 'http:localhost',
        paths: {
            html: './src/*.html',
            dist: './dist'
        }
    }
    ```

- create a Task that starts a web server
    ```Javascript
    gulp.task('connect', function() {
        connect.server({
            root: ['dist'],
            port: config.port,
            base: config.devBaseUrl,
            livereload: true
        });
    });
    ```

- create a second Task that opens the created Server
    ```Javascript
    gulp.task('open', ['connect'], function() {
        gulp.src('dist/index.html')
            .pipe(open({ uri: config.devBaseUrl + ':' + config.port +'/'}));
    });
    ```
    - notice the syntax of the second Task defines in the second property an arry of task that shoul be executeted before this task starts.
    
- create a third task, that transfer html- files from the `src`-Directory to the `dist`-Directory and reload the server.
    ```Javascript
    gulp.task('html', function() {
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.paths.dist))
            .pipe(connect.reload());
    });
    ```

- create a task that monitors the HTML-Directory
    ```Javascript
    gulp.task('watch', function() {
        gulp.watch(config.paths.html, ['html'])
    });
    ```
    - everytime a change is recognized, the 'html'-Task starts over again 

- create a default task, that can be started by typing `gulp` into the command line
    ```Javascript
        gulp.task('default', ['html', 'open', 'watch']);
    ```
    - notice the task starts the `'html'`-Task and then the `'open'`-Task
     
## Browserify Configuration ##

## Bootstrap Install ##

## ESLint Configuration ##

## React, React-Router and Flux Install ##