### Make it es6 ready ###

1. install babel
    `npm install babel-core babel-preset-es2015 babel-preset-react--save-dev`
2. create a `.babelrc` file
    ```Javascript
    {
        "presets": ['es2015, 'react']
    }
    ```
3. rename gulp-file
    `mv gulpfile.js gulpfile.babel.js`
4. ready to rumble
    ```Javascript
    ...
    import gulp from 'gulp';
    import connect from 'gulp-connect'; //Runs a local dev server
    import open from 'gulp-open'; //Open a URL in a web browser
    import browserify from 'browserify'; // Bundles JS
    import reactify from 'reactify'; // Transforms React JSX to JS
    import source from 'vinyl-source-stream'; // Use conventional text stream with Gulp
    
    ...
    ```