var gulp = require('gulp');
var p = require('gulp-load-plugins')();


var handle = function(err) {
  console.log(err); this.emit('end');
};

gulp.task('server', function() {
require('events').EventEmitter.prototype._maxListeners = 0;
  return p.connect.server({
    root: 'public_html',
    port: 8000,
    livereload: true
  });
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    // .pipe(p.imagemin({progressive: true}))
    .on('error', p.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('public_html/images'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('public_html/fonts'));
});

gulp.task('ejs', function() {
  return gulp.src('src/views/**/*.ejs')
    .pipe(p.ejs())
    .on('error', p.notify.onError('Error: <%= error.message %>'))
    .pipe(p.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(p.ejs({}, {ext:'.html'}))
    .pipe(gulp.dest('./public_html'))
    .pipe(p.connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/style/style.scss')
    .pipe(p.sass({outputStyle: 'compressed'}))
    .on('error', p.notify.onError('Error: <%= error.message %>'))
    .on('error', handle)
    .pipe(p.autoprefixer())
    .pipe(gulp.dest('public_html'))
    .pipe(p.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(p.concat('scripts.js'))
    .pipe(p.uglify())
    .on('error', p.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('public_html'))
    .pipe(p.connect.reload());
});

gulp.task('animations', function() {
  return gulp.src(['src/scripts/animations/approach.js', 'src/scripts/animations/*.js'])
    .pipe(p.concat('animations.js'))
    .pipe(p.uglify())
    .on('error', p.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('public_html'))
    .pipe(p.connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('src/views/**/*.ejs', ['ejs']);
  gulp.watch('src/style/**/*.scss', ['sass']);
  gulp.watch('src/scripts/*.js', ['scripts']);
  gulp.watch('src/scripts/animations/*.js', ['animations']);
});

gulp.task('push', function() {
  var awsOpts = {
    "key": process.env.AWS_ACCESS,
    "secret": process.env.AWS_SECRET,
    "bucket": process.env.AWS_BUCKET,
    "region": process.env.AWS_REGION
};

  gulp.src('./public_html/**')
    .pipe(p.s3(awsOpts));
});

gulp.task('default', [ 'server', 'fonts', 'images', 'ejs', 'sass', 'scripts', 'animations', 'watch' ]);
gulp.task('build', ['fonts', 'images', 'ejs', 'sass', 'scripts', 'animations']);
