var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
livereload = require('gulp-livereload');

gulp.task('styles', function() {
	return gulp.src('stylesheets/*.scss')
	.pipe(sass({ style: 'expanded' }))
	.pipe(gulp.dest('css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
	return gulp.src('javascripts/script.js')
	.pipe(uglify({outSourceMap: false}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**', ['styles']);
  var server = livereload();
  gulp.watch('dist/**').on('change', function(file) {
      server.changed(file.path);
  });
  gulp.watch('javascripts/script.js', ['scripts']);
});

gulp.task('default', ['styles', 'watch']);