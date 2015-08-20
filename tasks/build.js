var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var source     = require('vinyl-source-stream');
var babelify   = require('babelify');
var watchify   = require('watchify');
var streamify  = require('gulp-streamify');
var browserify = require('browserify');
var argv       = require('yargs').argv;
var gulpif     = require('gulp-if');
  
// Use browserify to build dist/mis-button.js from src/mis-button.js

gulp.task('build', function() {
  
  var bundleStream = browserify({ entries: 'src/js/mis-button.js', debug: argv.development, transform: babelify });
  var watchBundle  = argv.development ? watchify(bundleStream) : bundleStream; 
  
  function bundle() {
    return watchBundle
      .bundle()
      .on('error', function(err){
        console.log(err.message);
      })
      .pipe(gulpif(!argv.development, source('mis-button.min.js'), source('mis-button.js')))
      .pipe(gulpif(!argv.development, streamify(uglify())))
      .pipe(gulp.dest('./dist'));
  }
  
  // When passing the development flag, this watches the .js source for changes, and rebuilds the application when saved.
  
  if (argv.development) {
    watchBundle.on('update', bundle);
    watchBundle.on('log', function(msg) {
      console.log(msg);
    });
  }
  
  return bundle();
});