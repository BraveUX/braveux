const gulp = require('gulp');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const browserSync = require('browser-sync');
const plugins = require('gulp-load-plugins');
const $ = plugins();

// Images
gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe($.changed('./public_html/images'))
    .pipe($.imagemin([imageminJpegRecompress()]))
    .pipe(gulp.dest('./public_html/images'));
});

// Docs
gulp.task('documents', () => {
  return gulp.src('src/documents/**/*')
    .pipe($.changed('./public_html/images'))
    .pipe(gulp.dest('./public_html/documents'));
});

// Fonts
gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('./public_html/fonts'));
});

// HTML
gulp.task('ejs', () => {
  return gulp.src(['src/views/*.ejs', 'src/views/!(partials)**/*.ejs'])
    .pipe($.changed('./public_html'))
    .pipe($.ejs())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe($.ejs({}, {ext:'.html'}))
    .pipe(gulp.dest('./public_html'));
});

// CSS
gulp.task('sass', () => {
  return gulp.src(['src/styles/style.scss', 'src/styles/stretch.scss'])
    .pipe($.changed('./public_html/styles'))
    .pipe($.sass({
        outputStyle: 'compressed',
        includePaths: [
          './node_modules/animate-scss/',
          './node_modules/normalize-scss/sass',
          './node_modules/include-media/dist'
        ]
    }))
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.autoprefixer())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('./public_html/styles'));
});

// JS
gulp.task('scripts', () => {
  return gulp.src([
    './node_modules/waypoints/lib/jquery.waypoints.min.js',
    './node_modules/waypoints/lib/shortcuts/inview.min.js',
    'src/scripts/main.js',
  ])
    .pipe($.changed('./public_html/scripts'))
    .pipe($.babel({
      presets: ['env'],
      ignore: ['./node_modules/']
    })).on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('scripts.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./public_html/scripts'));
});

// JS ScrollReveal
gulp.task('scripts-sr', () => {
  return gulp.src('src/scripts/scrollreveal*.js')
    .pipe($.changed('./public_html/scripts'))
    .pipe($.babel())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('scrollreveal.min.js'))
  .pipe($.uglify())
    .pipe(gulp.dest('./public_html/scripts'));
});

// JS Vivus
gulp.task('scripts-vivus', () => {
  return gulp.src('src/scripts/vivus*.js')
    .pipe($.changed('./public_html/scripts'))
    .pipe($.babel())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('vivus.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./public_html/scripts'));
});

// JS Animations
gulp.task('scripts-animations', () => {
  return gulp.src([
      'src/scripts/animations/approach.js',
      'src/scripts/animations/*.js'
    ])
    .pipe($.changed('./public_html/scripts'))
    .pipe($.babel())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('animations.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./public_html/scripts'));
});

// Favicons
gulp.task('favicons', () => {
  return gulp.src('src/favicons/*')
    .pipe(gulp.dest('./public_html/'));
});

// Server files
gulp.task('server', () => {
  return gulp.src([
    'src/server/*',
    'src/server/.htaccess'
  ])
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('./public_html/'));
});

// The main building block task
gulp.task('build', gulp.series(
  'images',
  'fonts',
  'documents',
  'ejs',
  'sass',
  'scripts', 
  'scripts-animations', 
  'scripts-sr', 
  'scripts-vivus', 
  'favicons', 
  'server'
));

function reload(done) {
  browserSync.reload();
  done();
}

// Browser Sync with Live Reload
gulp.task('browser-sync', done => {
  return browserSync.init({
    server : {
      baseDir : './public_html/',
      serveStaticOptions : {
        extensions : ['html']
      }
    },
    port: 8000,
    open : false,
    notify: false,
    logConnections : true
  });
});

gulp.task('watch', done => {
    gulp.watch('src/images/**/*', gulp.series('images', reload));
    gulp.watch('src/fonts/**/*', gulp.series('fonts', reload));
    gulp.watch('src/documents/**/*', gulp.series('documents', reload));
    gulp.watch('src/views/**/*.ejs', gulp.series('ejs', reload));
    gulp.watch('src/styles/**/*.scss', gulp.series('sass', reload));
    gulp.watch('src/scripts/*.js', gulp.series(['scripts', 'scripts-vivus', 'scripts-sr'], reload));
    gulp.watch('src/scripts/animations/*.js', gulp.series('scripts-animations', reload));
    gulp.watch('src/favicons/**/*', gulp.series('favicons', reload));
    gulp.watch(['src/server/*', 'src/server/.htaccess'], gulp.series('server', reload));
    done();
});

gulp.task('deploy', () => {
  return gulp.src('./public_html/**/*')
    .pipe($.ghPages());
});

gulp.task('serve', gulp.parallel('browser-sync', 'watch'));

gulp.task('default', gulp.series('build', 'serve'));

gulp.task('build', gulp.series('build'));

