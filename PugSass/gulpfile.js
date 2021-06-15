const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const browsersync = require("browser-sync").create();

function style(){
  return gulp.src('./sass/*sass')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(browsersync.stream());
}


function views() {
  return gulp.src('./pug/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./public'))
    .pipe(browsersync.stream());
};

function watch(){
  gulp.watch('./sass/*sass', style)
  gulp.watch('./pug/**/*.pug', views)
}
exports.style = style
exports.views = views
exports.watch = watch