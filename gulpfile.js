var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var chalk = require('chalk');
var sass = require('gulp-sass');
var chmod = require('gulp-chmod');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var server = require( 'gulp-develop-server' );
var livereload = require( 'gulp-livereload' );
var jsmin = require('gulp-jsmin');



var options = {
  path: 'server/server.js'
};

var serverFiles = [
  'server/server.js',
  'server/boot/*.js'
];

var indexComponent = [
'client/index/app.js',
'client/index/**/*.js',
'client/sharedComponent/**/*.js',
'!client/index/js/bundle.js'
];

var adminComponent = [
'client/admin/app.js',
'client/admin/**/*.js',
'client/sharedComponent/**/*.js',
'!client/admin/js/bundle.js'
];

// run server
gulp.task( 'server:start', function() {
  server.listen( options, livereload.listen  );
});


// restart server if server.js changed
gulp.task( 'server:restart', function() {
  gulp.watch( [ 'server/server.js' ], server.restart );
});

//Build file bundle
gulp.task('compileIndex', function(){
  browserify(['client/index/app.js'])
    .transform(babelify)
    .bundle()
    .on('error', function(err){
      console.log(chalk.bold.red(err));
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('client/index/js'));
});

gulp.task('compileAdmin', function(){
  browserify(['client/admin/app.js'])
    .transform(babelify)
    .bundle()
    .on('error', function(err){
      console.log(chalk.bold.red(err));
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('client/admin/js'));
});
gulp.task('minBundleAdmin', function () {
  gulp.src('client/admin/js/bundle.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/admin/js'));
});
gulp.task('minBundleIndex', function () {
  gulp.src('client/index/js/bundle.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('client/index/js'));
});
//build sass to css and min file
gulp.task('sassIndex', function () {
  return gulp.src('client/index/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(chmod(777))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('client/index/css'));
});

gulp.task('sassAdmin', function () {
  return gulp.src('client/admin/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(chmod(777))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('client/admin/css'));
});

gulp.task('build', ['compileIndex','compileAdmin', 'sassIndex','sassAdmin']);

//min file js bundle
gulp.task('minBundle', ['minBundleAdmin','minBundleIndex']);

//auto watch change file
gulp.task('watch', function () {
  watch(indexComponent, batch(function (events, done) {
    gulp.start('compileIndex', done);
  }));
  watch(adminComponent, batch(function (events, done) {
    gulp.start('compileAdmin', done);
  }));
  watch(['client/index/sass/*.scss'], batch(function (events, done) {
    gulp.start('sassIndex', done);
  }));
  watch(['client/admin/sass/*.scss'], batch(function (events, done) {
    gulp.start('sassAdmin', done);
  }));
});

gulp.task('default', ['build','watch','server:start','server:restart'], function(){
  function restart( file ) {
    server.changed( function( error ) {
      if( ! error ) livereload.changed( file.path );
    });
  }

  gulp.watch( serverFiles ).on( 'change', restart );
});
