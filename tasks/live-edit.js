var gulp         = require('gulp');
var nodemon      = require('gulp-nodemon');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve', ['build', 'sass', 'browser-sync'], function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch(["./src/**/*.js"], ['build', reload]);
    gulp.watch(["./examples/**/*.*"], [reload]);
});