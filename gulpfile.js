var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('nodemon');
var sass = require('gulp-sass');

var reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('public/styles'))
    .pipe(reload({stream:true}));
});

gulp.task('pug', function() {
   return gulp.src('views/**/*.pug')
   .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch("sass/**/*.scss", ['sass']);
   gulp.watch("views/**/*.pug", ['pug', browserSync.reload]);
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "google chrome",
        port: 7000
  });
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    if (!started) {
      cb();
      started = true;
    }
  });
});


