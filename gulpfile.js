var gulp = require("gulp");
var plugin = require('gulp-load-plugins')();

var handle = function(err) {console.log(err); this.emit('end');}


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

gulp.task('ejs', function() {
  return gulp.src('src/views/*.ejs')
    .pipe(plugin.ejs())
    .on('error', handle)
    .pipe(plugin.htmlmin({collapseWhitespace: true})) 
    .pipe(gulp.dest('./public'));
});

gulp.task('server', function() {
  return plugin.connect.server({
    root: 'public',
    port: 8000
  });
});


gulp.task('watch', function() {
  gulp.watch('src/style/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/views/**/*.ejs', ['ejs']);
});


gulp.task('default', [ 'server','ejs', 'sass', 'scripts', 'watch']);