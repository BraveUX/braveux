var gulp = require("gulp");
var plugin = require('gulp-load-plugins')();

var handle = function(err) {
  this.emit('end');
  console.log(err);
}

gulp.task('sass', function() {
  return gulp.src('src/style/style.scss')
    .pipe(plugin.sass({outputStyle:'compressed'}))
    .on('error', handle)
    .pipe(gulp.dest('public/'));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(plugin.concat('scripts.js'))
    .pipe(plugin.uglify())
    .on('error', handle)
    .pipe(gulp.dest('public/'))
});

gulp.task('watch', function() {
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
});

gulp.task('default', [ 'sass', 'scripts', 'watch']);