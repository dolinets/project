'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function (done) {
  gulp.src('public_html/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('public_html/css'));
	done();
});
 
gulp.task('sass:watch', function () {
  gulp.watch('public_html/sass/**/*.scss', gulp.parallel('sass'));
});
