// Load plugins
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const appDefaults = {
  stylesDir : 'scss/',
  outputDir: 'css/',
};

// Styles
gulp.task('styles', () => {
  return gulp.src(`${appDefaults.stylesDir}**/*.scss`)
    .pipe(sass({ style: 'compressed'  }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(appDefaults.outputDir))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(appDefaults.stylesDir))
    .pipe(notify({ message: 'Styles task complete' }));
});


// Watch
gulp.task('watch', () => {
  console.log(`${appDefaults.stylesDir}**/*.scss`);
  gulp.watch(`${appDefaults.stylesDir}**/*.scss`, (event) => {
    gulp.run('styles');
  });
});


// Default task
gulp.task('default', function() {

});
