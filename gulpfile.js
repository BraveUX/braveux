var gulp = require("gulp");
var p = require('gulp-load-plugins')();

var handle = function(err) {console.log(err); this.emit('end');}


gulp.task('sass', function() {
  return gulp.src('src/style/style.scss')
    .pipe(p.sass({outputStyle:'compressed'}))
    .on('error', handle)
    .pipe(gulp.dest('public'));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(p.concat('scripts.js'))
    .pipe(p.uglify())
    .on('error', handle)
    .pipe(gulp.dest('public'))
});

gulp.task('ejs', function() {
  return gulp.src('src/views/*.ejs')
    .pipe(p.ejs())
    .on('error', handle)
    .pipe(p.htmlmin({collapseWhitespace: true})) 
    .pipe(gulp.dest('public'));
});

gulp.task('server', function() {
  return p.connect.server({
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