var gulp   = require('gulp');
var bump   = require('gulp-bump');
var argv   = require('yargs').argv;

// Update bower & npm at once: 

gulp.task('bump', function(){
  
  var level = argv.major ? 'major' : argv.minor ? 'minor' : 'patch';
  
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump({ type: level }))
  .pipe(gulp.dest('./'));
});