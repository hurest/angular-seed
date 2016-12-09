const YAML   = require('yamljs');
const CONFIG = YAML.load('config/gulp.config.yml');

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const sourcemaps = require('gulp-sourcemaps');


let defaultTaskList = [
  'watch:sass',
  'watch:js',
  'watch:html'
];


gulp.task('sass', function () {
  return gulp.src(CONFIG.PATH.DEV.FILES.SASS_ROOT)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(CONFIG.PATH.DEV.DIRS.STYLE))
    .pipe(connect.reload());
});


gulp.task('watch:sass', ['sass'], function () {
  gulp.watch(CONFIG.PATH.DEV.FILES.SASS, ['sass']);
});


gulp.task('watch:js', function () {
  watch(CONFIG.PATH.DEV.FILES.JS)
    .pipe(connect.reload());
});


gulp.task('watch:html', function () {
  watch(CONFIG.PATH.DEV.FILES.HTML)
    .pipe(connect.reload());
});


gulp.task('default', defaultTaskList, function () {

  connect.server({
        livereload: true
    });

});