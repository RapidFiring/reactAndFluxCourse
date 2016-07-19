/**
 * Created by mwalters on 18.07.2016.
 */
'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect'; //Runs a local dev server
import open from 'gulp-open'; //Open a URL in a web browser
import browserify from 'browserify'; // Bundles JS
import reactify from 'reactify'; // Transforms React JSX to JS
import source from 'vinyl-source-stream'; // Use conventional text stream with Gulp
import concat from 'gulp-concat'; // Concatenates files
import eslint from 'gulp-eslint'; // Lint JS Files, including JSX

let config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

// Tasks
// Start a local development server
gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Open but run connect first
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: `${config.devBaseUrl}:${config.port}/`}));
});

// find all .html-Files, put it into dist-Directory and after that
// reload the server
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});
// task to bundle js-File
gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(`${config.paths.dist}/scripts`))
        .pipe(connect.reload());
});
//Task to bundle the css-Files
gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(`${config.paths.dist}/css`));
});
//Task to bundle the image-Files
gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(`${config.paths.dist}/images`))
        .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist))
});
// Task for lint that returns the linted JS-Files,
// according to the rules of the configuration-file
gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(eslint({config: 'eslint.config.json'}))
        .pipe(eslint.format());
});
// Task monitors the HTML-Directory and everytime a change is recognized,
// the 'html'-Task starts over again
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.html, ['js', 'lint']);
});
//default task, that can be started by typing 'gulp' into the command line
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);