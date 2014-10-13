var gulp = require("gulp");
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');


var handle = notify.onError("Error: <%= error.message %>");

gulp.task('sass', function() {
  return gulp.src('./src/style/style.scss')
    .pipe(sass({'sourcemap=none': true, style: 'compressed'}))
    .on('error', handle)
    .pipe(gulp.dest('./public'))
});

gulp.task('scripts', function() {
  return gulp.src('./src/scripts/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .on('error', handle)
    .pipe(gulp.dest('./public'))
});

gulp.task('watch', function() {
  gulp.watch('./src/style/*.scss', ['sass']);
  gulp.watch('./src/scripts/*.js', ['scripts']);
});


gulp.task('default', [ 'sass', 'scripts', 'watch']);
