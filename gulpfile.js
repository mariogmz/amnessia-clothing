var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    port: 4000
  });
});

gulp.task('browserify', function() {
  return browserify('./app/app.js', {
      transform: stringify({
        extensions: ['.html'],
        minify: true
      })
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function() {
  gulp.src('./scss/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['browserify', 'sass'], function() {
  gulp.watch('app/**/{*.js,*.html}', ['browserify']);
  gulp.watch('scss/**/*.{scss,sass}', ['sass']);
});

gulp.task('default', ['watch', 'connect']);
