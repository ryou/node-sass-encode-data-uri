const gulp = require('gulp');
const sass = require('gulp-sass');
const sassEncodeDataUri = require('./node-sass-encode-data-uri');

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      functions: sassEncodeDataUri,
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('default', () => {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});
