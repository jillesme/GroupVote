var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var src = './public/src';
var dist = './public/dist';
var lib = './public/lib';

var paths = {
  html: [src + '/index.html', src + '/views/*.html'],
  js: src + '/js/**/*.js',
  sass: src + '/scss/**/*.scss',
  lib: [
    lib + '/angular/angular.js'
  ]
};

gulp.task('lint-js', function () {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('minify-js', function () {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(dist + '/js'));
});

gulp.task('compile-sass', function () {
  return gulp.src(paths.sass)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(dist + '/css'));
});

gulp.task('watch-files', function () {
  gulp.watch(paths.js, ['lint-js', 'minify-js']);
  gulp.watch(paths.sass, ['compile-sass']);
});

gulp.task('default', [
  'lint-js',
  'minify-js',
  'compile-sass',
  'watch-files'
]);

function showError (error) {
  console.log('Error in \'' + error.plugin + '\'');
  console.log(error.message);
  this.emit('end');
}

