var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var streamify    = require('gulp-streamify');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('sass', function () {
  
	return gulp.src('./src/scss/style.scss')
	  .pipe(streamify(sass()))
	  .pipe(autoprefixer())
	  .pipe(gulp.dest('./dist/css'))
	  .pipe(reload({ stream:true }));

});