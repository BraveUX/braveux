var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// var reportError = function(error) {
//     plugins.notify({
//         title: 'Gulp Task Error',
//         message: 'Check the console.'
//     }).write(error);
//     console.log(error.toString());
//     this.emit('end');
// };

gulp.task('connect', function() {
  plugins.connect.server({
    root: './public_html',
    port: 8000,
    livereload: true
  });
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(plugins.changed('./public_html/images'))
    .pipe(plugins.imagemin({progressive: true}))
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    // .on('error', reportError)
    .pipe(gulp.dest('./public_html/images'))
    .pipe(plugins.connect.reload());
});

gulp.task('documents', function() {
  return gulp.src('src/documents/**/*')
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(plugins.changed('./public_html/images'))
    .pipe(gulp.dest('./public_html/documents'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('./public_html/fonts'));
});

gulp.task('ejs', function() {
  return gulp.src(['src/views/*.ejs', 'src/views/!(partials)**/*.ejs'])
    .pipe(plugins.changed('./public_html'))
    .pipe(plugins.ejs())
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    // .on('error', reportError)
    .pipe(plugins.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(plugins.ejs({}, {ext:'.html'}))
    .pipe(gulp.dest('./public_html'))
    .pipe(plugins.connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('src/styles/style.scss')
    .pipe(plugins.changed('./public_html/styles'))
    .pipe(plugins.sass({
        outputStyle: 'compressed',
        includePaths: [
          './node_modules/animate-scss/',
          './node_modules/normalize-scss/sass',
          './node_modules/include-media/dist'
        ]
    }))
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    // .on('error', reportError)
    .pipe(plugins.autoprefixer())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./public_html/styles'))
    .pipe(plugins.connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src([
    '!src/scripts/vivus*.js',
    '!src/scripts/scrollreveal*.js',
    './node_modules/waypoints/lib/jquery.waypoints.min.js',
    './node_modules/waypoints/lib/shortcuts/inview.min.js',
    'src/scripts/*.js'
  ])
    .pipe(plugins.changed('./public_html/scripts'))
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(plugins.babel())
    .pipe(plugins.concat('scripts.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public_html/scripts'))
    .pipe(plugins.connect.reload());
});

gulp.task('scripts-sr', function() {
  return gulp.src('src/scripts/scrollreveal*.js')
    .pipe(plugins.changed('./public_html/scripts'))
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(plugins.babel())
    .pipe(plugins.concat('scrollreveal.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public_html/scripts'))
    .pipe(plugins.connect.reload());
});

gulp.task('scripts-vivus', function() {
  return gulp.src('src/scripts/vivus*.js')
    .pipe(plugins.changed('./public_html/scripts'))
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(plugins.babel())
    .pipe(plugins.concat('vivus.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public_html/scripts'))
    .pipe(plugins.connect.reload());
});

gulp.task('scripts-animations', function() {
  return gulp.src([
      'src/scripts/animations/approach.js',
      'src/scripts/animations/*.js'
    ])
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(plugins.changed('./public_html/scripts'))
    .pipe(plugins.concat('animations.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./public_html/scripts'))
    .pipe(plugins.connect.reload());
});

gulp.task('favicons', function() {
  return gulp.src('src/favicons/*')
    .pipe(gulp.dest('./public_html/'));
});

gulp.task('server', function() {
  return gulp.src([
    'src/server/*',
    'src/server/.htaccess'
  ])
    .on('error', plugins.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('./public_html/'))
    .pipe(plugins.connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/fonts/**/*', ['fonts']);
    gulp.watch('src/documents/**/*', ['documents']);
    gulp.watch('src/views/**/*.ejs', ['ejs']);
    gulp.watch('src/styles/**/*.scss', ['sass']);
    gulp.watch('src/scripts/*.js', ['scripts', 'scripts-vivus', 'scripts-sr']);
    gulp.watch('src/scripts/animations/*.js', ['scripts-animations']);
    gulp.watch('src/favicons/**/*', ['favicons']);
    gulp.watch(['src/server/*', 'src/server/.htaccess'], ['server']);
});

gulp.task('deploy', function() {
  return gulp.src('./public_html/**/*')
    .pipe(plugins.ghPages());
});

gulp.task('default', ['fonts', 'images', 'documents', 'ejs', 'sass', 'scripts', 'scripts-animations', 'scripts-sr', 'scripts-vivus', 'favicons', 'server', 'connect', 'watch' ]);
gulp.task('build', ['fonts', 'images', 'documents', 'ejs', 'sass', 'scripts', 'scripts-animations', 'scripts-sr', 'scripts-vivus', 'favicons', 'server']);
