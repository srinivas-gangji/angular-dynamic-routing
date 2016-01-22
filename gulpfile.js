// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');

gulp.task('html', function () {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/**/*.js')
    .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/js/**/*.js'], ['js']);
});

gulp.task('default', ['connect', 'watch']);
