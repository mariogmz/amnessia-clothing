var gulp = require('gulp');
var connect = require('gulp-connect');
var history = require('connect-history-api-fallback');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var stringify = require('stringify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    fallback: 'public/index.html',
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

gulp.task('copyfonts', function() {
  gulp.src('./node_modules/**/*.{ttf,woff,eof,svg}')
   .pipe(flatten())
   .pipe(gulp.dest('./public/css/fonts'));
});

gulp.task('watch', ['browserify', 'sass', 'copyfonts'], function() {
  gulp.watch('app/**/{*.js,*.html}', ['browserify']);
  gulp.watch('scss/**/*.{scss,sass}', ['sass']);
  gulp.watch('node_modules/**/*.{ttf,woff,eof,svg}', ['copyfonts']);
});

gulp.task('uglify', ['browserify'], function () {
    gulp.src('./public/js/main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('default', ['watch', 'connect']);
