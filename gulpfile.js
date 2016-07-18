/**
 * Created by mwalters on 18.07.2016.
 */
'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect'; //Runs a local dev server
import open from 'gulp-open'; //Open a URL in a web browser

let config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
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
        .pipe(open({ uri: '${config.devBaseUrl}:${config.port}/'}));
});

// find all .html-Files, put it into dist-Directory and after that
// reload the server
gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// Task monitors the HTML-Directory and everytime a change is recognized,
// the 'html'-Task starts over again
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html'])
});

//default task, that can be startet by typing 'gulp' into the command line
gulp.task('default', ['html', 'open', 'watch']);