const YAML = require('yamljs');
const CONFIG = YAML.load('config/gulp.config.yml');

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const sourcemaps = require('gulp-sourcemaps');
const modRewrite = require('connect-modrewrite');
const useref = require('gulp-useref');
const templateCache = require('gulp-angular-templatecache');
const concat = require('gulp-concat');
const angularFilesort = require('gulp-angular-filesort');
const ngAnnotate = require('gulp-ng-annotate');
const replace = require('gulp-replace');
const clean = require('gulp-clean');
const uglify = require('gulp-uglifyjs');

const lazypipe = require('lazypipe');

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



// angular 템플릿 파일들을 하나의 js 파일로 합치기
gulp.task('angular-template', function () {

  var tmplOpts = {
    module: CONFIG.APPNAME,
    base: __dirname,
    transformUrl: function (url) {
      return '/' + url;
    }
  };

  return gulp.src('app/templates/**/**/*.html')
    .pipe(templateCache('tmp.template.js', tmplOpts))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('combine', ['angular-template'], function () {

  var opts = {
    searchPath: process.cwd(),
    base: process.cwd() + '/dist'
  };

  return gulp.src('app/index.html')
    .pipe(useref(opts, lazypipe().pipe(sourcemaps.init, { loadMaps: true })))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('angular-concat', ['combine'], function () {

    return gulp.src('dist/js/*.js')
        .pipe(angularFilesort())
        .pipe(concat('dist.js'))
        .pipe(ngAnnotate())
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('replace', ['angular-concat'], function(){

  var time = Date.now();

  gulp.src(['dist/index.html'])
    .pipe(replace(/css\/style.css/, `css/style.css?bt=${time}`))
    .pipe(replace(/<!-- source:js -->[\s\S]+<!-- endsource -->/, `<script src="js/dist.js?bt=${time}"></script>`))
    .pipe(gulp.dest('dist'));

});

gulp.task('build', ['replace'], function () {

    return gulp.src('dist/js/tmp.*.js', { read: false })
        .pipe(clean());
});

gulp.task('dist', function () {
  connect.server({
    fallback: './dist/index.html',
    root: './dist',
    livereload: false,
    port: 8000
  });
});

gulp.task('default', defaultTaskList, function () {

  connect.server({
    fallback: './app/index.html',
    livereload: true,
    middleware: function () {
      return [
        // modRewrite([ '^/api/v1/(.*)$ http://localhost:8080/api/$1 [P]' ])
      ];
    }
  });

});