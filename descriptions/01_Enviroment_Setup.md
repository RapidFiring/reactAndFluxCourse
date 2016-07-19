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
1. create a file for gulp called `gulpfile.js`
2. create variables for all 3 packages installed
    ```Javascript
    var gulp = require('gulp');
    var connect = require('gulp-connect'); //Runs a local dev server
    var open = require('gulp-open'); //Open a URL in a web browser
    ```

3. define a variable with configuration information
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
1. install browserify, reactify and a file-stream package

    ```
    $ npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
    ```
2. add some requirements to the `gulpfile.js`.

    ```Javascript
    var browserify = require('browserify'); // Bundles JS
    var reactify = require('reactify'); // Transforms React JSX to JS
    var source = require('vinyl-source-stream'); // Use conventional text stream with Gulp
    ``` 
3. add a js Path to the `config`.

    ```Javascript
        ...
            html: './src/*.html',
            js: './src/**/*.js',
            dist: './dist'
            mainJs: './src/main.js'
        ...    
    ```
4. create a `'js'` Task

    ```Javascript
    gulp.task('js', function() {
        browserify(config.paths.mainJs)
            .transform(reactify)
            .bundle()
            .on('error', console.error.bin(console))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(config.paths.dist + '/scripts'))
            .pipe(connect.reload())
    });
    ```
    
    this converts and bundles the react JSX and JS files into a File named `bundle.js` transfers it into the `dist/scripts` Directory and reloads the server 
5. add the `'js'` task to the `'watch'` Task

    ```Javascript
    gulp.watch(config.paths.html, ['js']);
    ```
6. add the `'js'` task to the array of the `'default'` task

    `... ['html', 'js', 'open', 'watch'] ...`
7. add a `main.js` File into the `src` directory with some dummy-code

    
## Bootstrap Install ##
1. install bootstrap, jquery and the gulp-concat package

    ```
    $ npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
    ```
    
2. add referenz to `gulpfile.js` and bootstrap to config
    ```Javascript
    var concat = require('gulp-concat'); // Concatenates files
     
     ---
             
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ]
        dist: './dist'
    
    ``` 
3. add a `'css'` Task to the `gulpfile.js` and extend the `'default'` Task
    ```Javascript
    gulp.task('css', function() {
        gulp.src(config.paths.css)
            .pipe(concat('bundle.css'))
            .pipe(gulp.dest(config.paths.dist + '/css'))
    });
    ```
    
    ```Javascript
    gulp.task('default', ['html', 'js', 'css', 'open', 'watch']);
    ```

4. update the `index.html` insert the new link to the stylesheet bundle
    ```HTML
    <link rel="stylesheet" href="css/bundle.css" />
    ```

5. insert the jquery referenz to the `'main.js'`    
    ```Javascript
    $ = jQuery = require('jquery');
    ```
    this is defined globally for browserify.
    
## ESLint Configuration ##

## React, React-Router and Flux Install ##