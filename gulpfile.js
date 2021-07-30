const { src, dest, watch, parallel, series } = require('gulp');

const sass         = require('gulp-sass');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const del          = require('del');
const ttf2woff     = require('gulp-ttf2woff');
const ttf2woff2    = require('gulp-ttf2woff2');




function browsersync () {
  browserSync.init({
    server: { baseDir: 'app/', },
    notify: false,
    online: true,
  });
}

function watching() {
  watch(['app/scss/**/*.scss'], scss);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

function scss() {
  return src([
    // 'node_modules/normalize.css/normalize.css',
    'app/scss/style.scss'
  ])
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true,
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'app/js/vendors/**.js',
    // 'app/js/slick.min.js',
    'app/js/main.js',
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())   // stream обновляет страницу
}

function images () {
  return src('app/img/**/*')
    .pipe(newer('dist/img'))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(dest('dist/img'))
}

function fonts() {
     src('app/fonts/**/*.ttf')
    .pipe(ttf2woff())
    .pipe(dest('dist/fonts/'));

    return src('app/fonts/**/*')
    .pipe(ttf2woff2())
    .pipe(dest('dist/fonts')); 
  
}



function cleandist() {
  return del('dist')
}

function buildproject() {
  return src([
    'app/css/**/*.min.css',
    'app/fonts/**/*',
    'app/js/**/*.min.js',
    'app/**/*.html',
  ], {base: 'app'}) 

  .pipe(dest('dist'))
}



exports.scss        = scss;
exports.watching    = watching;
exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.images      = images;
exports.cleandist   = cleandist;
exports.fonts       = fonts;

exports.build       = series(cleandist, images, buildproject, fonts) ;
exports.default     = parallel(scss, scripts, watching, browsersync); 