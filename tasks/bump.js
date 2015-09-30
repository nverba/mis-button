var gulp   = require('gulp');
var bump   = require('gulp-bump');
var argv   = require('yargs').argv;

gulp.task('bump', function(){
  
  var level;
  if (argv.major) { level = 'major' }
  if (argv.minor) { level = 'minor' }
  if (argv.patch) { level = 'patch' }
  
  if (level) {
    gulp.src(['./package.json'])
      .pipe(bump({ type: level }))
      .pipe(gulp.dest('./'));
  }
  
});