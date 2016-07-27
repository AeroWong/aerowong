var gulp = require('gulp'),
    sass = require('gulp-sass'),
    $    = require('gulp-load-plugins')(),
    minifyCSS = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css');

gulp.task('build-css', function(){
    return gulp.src('assets/scss/**/*.scss')
        .pipe($.sass({
          outputStyle: 'compressed' // if css compressed **file size**
        })
        .on('error', $.sass.logError))
        .pipe(cleanCSS())
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['assets/scss/**/*.scss'], ['build-css']);
});