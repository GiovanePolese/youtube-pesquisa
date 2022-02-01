const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const concat = require('gulp-concat');

const src = {
	public: "./public",
	css: [
		"./src/styles/reset.sass",
		"./src/styles/home.sass",
		"./src/styles/modal.sass"
	],
	js: [
		"./node_modules/jquery/dist/jquery.min.js",
		"./src/scripts/home.js",
		"./src/scripts/modal.js"
	]
}

gulp.task('styles', function () {
	return gulp.src(src.css)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(concat("styles.min.css"))
		.pipe(gulp.dest(src.public));
});

gulp.task('scripts', function () {
  return gulp.src(src.js)
    .pipe(concat('script.min.js'))
    .pipe(minify({ noSource: true, ext: '.js' }))
    .pipe(gulp.dest(src.public));
});

gulp.task('default', gulp.parallel('styles', 'scripts'));