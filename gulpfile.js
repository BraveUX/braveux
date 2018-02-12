const gulp = require('gulp');
const clean = require('del');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminPngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('clean', () => {
  return clean(['./dist/**', '!./dist/', './.publish']);
});

gulp.task('deploy:ghPages', () => {
  return gulp.src('./dist/**/*').pipe($.ghPages());
});

// Images
gulp.task('images', () => {
  return gulp
    .src('src/images/**/*')
    .pipe($.changed('./dist/images'))
    .pipe(
      $.imagemin([
        imageminJpegRecompress({
          progressive: true,
          quality: 'high'
        }),
        imageminPngquant()
      ])
    )
    .pipe(gulp.dest('./dist/images'));
});

// Docs
gulp.task('documents', () => {
  return gulp
    .src('src/documents/**/*')
    .pipe($.changed('./dist/images'))
    .pipe(gulp.dest('./dist/documents'));
});

// Fonts
gulp.task('fonts', () => {
  return gulp.src('src/fonts/**/*').pipe(gulp.dest('./dist/fonts'));
});

// HTML
gulp.task('ejs', () => {
  return gulp
    .src(['src/views/**/!(_)*.ejs'])
    .pipe($.changed('./dist'))
    .pipe($.ejs())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.htmlmin({ collapseWhitespace: true, removeComments: true }))
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.ejs({}, { ext: '.html' }))
    .pipe(gulp.dest('./dist'));
});

// CSS
gulp.task('sass', () => {
  return gulp
    .src(['src/styles/style.scss', 'src/styles/stretch.scss'])
    .pipe($.changed('./dist/styles'))
    .pipe(
      $.sass({
        outputStyle: 'compressed',
        includePaths: [
          './node_modules/animate-scss/',
          './node_modules/normalize-scss/sass',
          './node_modules/include-media/dist'
        ]
      })
    )
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.autoprefixer())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/styles'));
});

// JS
gulp.task('scripts', () => {
  return gulp
    .src([
      './node_modules/waypoints/lib/jquery.waypoints.min.js',
      './node_modules/waypoints/lib/shortcuts/inview.min.js',
      './node_modules/layzr.js/dist/layzr.js',
      'src/scripts/main.js'
    ])
    .pipe($.changed('./dist/scripts'))
    .pipe(
      $.babel({
        presets: ['env'],
        ignore: ['./node_modules/']
      })
    )
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('scripts.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

// JS ScrollReveal
gulp.task('scripts-sr', () => {
  return gulp
    .src('src/scripts/scrollreveal*.js')
    .pipe($.changed('./dist/scripts'))
    .pipe($.babel())
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('scrollreveal.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

// JS Vivus
gulp.task('scripts-vivus', () => {
  return gulp
    .src('src/scripts/vivus*.js')
    .pipe($.changed('./dist/scripts'))
    .pipe(
      $.babel({
        presets: ['env'],
        ignore: ['./node_modules/']
      })
    )
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('vivus.min.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

// JS Animations
gulp.task('scripts-animations', () => {
  return gulp
    .src(['src/scripts/animations/approach.js', 'src/scripts/animations/*.js'])
    .pipe($.changed('./dist/scripts'))
    .pipe(
      $.babel({
        presets: ['env'],
        ignore: ['./node_modules/']
      })
    )
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.concat('animations.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

// JS Stretch
gulp.task('scripts-stretch', () => {
  return gulp
    .src(['src/scripts/stretch.js'])
    .pipe($.changed('./dist/scripts'))
    .pipe(
      $.babel({
        presets: ['env'],
        ignore: ['./node_modules/']
      })
    )
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe($.uglify())
    .pipe(gulp.dest('./dist/scripts'));
});

// Favicons
gulp.task('favicons', () => {
  return gulp.src('src/favicons/*').pipe(gulp.dest('./dist/'));
});

// Server files
gulp.task('server', () => {
  return gulp
    .src(['src/server/*', 'src/server/.htaccess'])
    .on('error', $.notify.onError('Error: <%= error.message %>'))
    .pipe(gulp.dest('./dist/'));
});

// The main building block task
gulp.task(
  'build',
  gulp.series(
    'images',
    'fonts',
    'documents',
    'ejs',
    'sass',
    'scripts',
    'scripts-animations',
    'scripts-sr',
    'scripts-vivus',
    'scripts-stretch',
    'favicons',
    'server'
  )
);

function reload(done) {
  browserSync.reload();
  done();
}

// Browser Sync with Live Reload
gulp.task('browser-sync', () => {
  return browserSync.init({
    server: {
      baseDir: './dist/',
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 8000,
    open: false,
    notify: false,
    logConnections: true
  });
});

gulp.task('watch', done => {
  gulp.watch('src/images/**/*', gulp.series('images', reload));
  gulp.watch('src/fonts/**/*', gulp.series('fonts', reload));
  gulp.watch('src/documents/**/*', gulp.series('documents', reload));
  gulp.watch('src/views/**/*.ejs', gulp.series('ejs', reload));
  gulp.watch('src/styles/**/*.scss', gulp.series('sass', reload));
  gulp.watch(
    'src/scripts/*.js',
    gulp.series(
      ['scripts', 'scripts-vivus', 'scripts-sr', 'scripts-stretch'],
      reload
    )
  );
  gulp.watch(
    'src/scripts/animations/*.js',
    gulp.series('scripts-animations', reload)
  );
  gulp.watch('src/favicons/**/*', gulp.series('favicons', reload));
  gulp.watch(
    ['src/server/*', 'src/server/.htaccess'],
    gulp.series('server', reload)
  );
  done();
});

// Task for deploying to GhPages
gulp.task('deploy', gulp.series('clean', 'build', 'deploy:ghPages', 'clean'));

gulp.task('serve', gulp.parallel('browser-sync', 'watch'));

gulp.task('default', gulp.series('build', 'serve'));

gulp.task('build', gulp.series('build'));
