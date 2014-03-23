var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
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

gulp.task('scripts', function() {
	return gulp.src('javascripts/*.js')
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
  gulp.watch('stylesheets/**', ['styles']);
  gulp.watch('javascripts/**', ['scripts']);
  var server = livereload();
  gulp.watch('dist/**').on('change', function(file) {
      server.changed(file.path);
  });
});

gulp.task('default', ['styles', 'scripts', 'watch']);