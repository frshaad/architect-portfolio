const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const imagewebp = require('gulp-webp');
const browsersync = require('browser-sync').create();

function scssTask() {
	return src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefix())
		.pipe(minify())
		.pipe(sourcemaps.write('.'))
		.pipe(dest('dist'));
}

function jsTask() {
	return src('src/js/**/*.js').pipe(concat('all.js')).pipe(terser()).pipe(dest('dist'));
}

function svgCopy() {
	return src('src/images/**/*.svg').pipe(dest('dist/images'));
}

function imgTask() {
	return src('src/images/**/*.{jpg,png}')
		.pipe(
			imagemin([
				imagemin.mozjpeg({ quality: 80, progressive: true }),
				imagemin.optipng({ optimizationLevel: 2 }),
			])
		)
		.pipe(dest('dist/images/optimized'));
}

function webpTask() {
	return src('dist/images/optimized/*.{jpg,png}').pipe(imagewebp()).pipe(dest('dist/images'));
}

function browsersyncServe(cb) {
	browsersync.init({
		server: {
			baseDir: '.',
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browsersync.reload();
	cb();
}

function watchTask() {
	watch('*.html', browsersyncReload);
	watch('src/scss/**/*.scss', series(scssTask, browsersyncReload));
	watch('src/js/**/*.js', series(jsTask, browsersyncReload));
	watch('src/images/**/*.svg', series(svgCopy, browsersyncReload));
	watch('src/images/**/*.{jpg,png}', series(imgTask, browsersyncReload));
	watch('dist/images/optimized/*.{jpg,png}', series(webpTask, browsersyncReload));
}

exports.default = series(scssTask, jsTask, svgCopy, imgTask, webpTask, browsersyncServe, watchTask);
