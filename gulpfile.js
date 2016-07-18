/**
 * Created by mwalters on 18.07.2016.
 */
'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect'; //Runs a local dev server
import open from 'gulp-open'; //Open a URL in a web browser

let config = {
    port: 9005,
    devBaseUrl: 'http:localhost',
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