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
  - src: all code files
  - dist: distributed package

## Gulp Configuration ##
1. create a file for gulp caaled 'gulpfile.js'
2. cerate variables for all 3 packages installed
```Javascript
var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
```

## Browserify Configuration ##

## Bootstrap Install ##

## ESLint Configuration ##

## React, React-Router and Flux Install ##