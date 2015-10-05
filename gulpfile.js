var gulp = require('gulp'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('imagemin', function(){
  gulp.src('themes/louays/source/_img/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('themes/louays/source/img'));
});

gulp.task('script',function(){
  gulp.src('themes/louays/source/_app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('themes/louays/source/app/'));
});

gulp.task('style',function(){
  gulp.src('themes/louays/source/_scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(scss({outputStyle:'compressed'}).on('error',scss.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('themes/louays/source/css/'));
});

gulp.task('clean', function(){
  del('themes/louays/source/css/');
  del('themes/louays/source/app/');
  del('themes/louays/source/img/');
});

gulp.task('watch', function(){
  gulp.watch('themes/louays/source/_scss/**/*.scss',['style']);
  gulp.watch('themes/louays/source/_app/**/*.js',['script']);
  gulp.watch('themes/louays/source/_img/**/*',['imagemin']);
});

gulp.task('default',['clean','style','script','imagemin']);