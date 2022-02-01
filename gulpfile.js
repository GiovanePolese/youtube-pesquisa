const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

const css = {
    root: 'styles/sass/',
    dist: 'styles/css/'
}

gulp.task('sass', function() {
    return gulp.src(css.root + 'styles.sass')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest(css.dist));
});