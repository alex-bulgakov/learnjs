var gulp				= require("gulp"),
		rename			=	require("gulp-rename"),
		browserSync = require("browser-sync").create(),
		concat			= require("gulp-concat"),
		sass				= require("gulp-sass"),
		cleanCSS    = require('gulp-clean-css');

gulp.task("styles", function() {
	return gulp.src("sass/*.sass")
				.pipe(sass()).on("error", sass.logError)
				.pipe(rename({suffix: ".min", prefix: ""}))
				.pipe(cleanCSS())
				.pipe(gulp.dest("css/"))
				.pipe(browserSync.stream());
});

gulp.task("scripts", function() {
	return gulp.src([
			"./learn/**/*.js"
		])
		.pipe(concat("main.js"))
		.pipe(gulp.dest("./js/"));
});

gulp.task("browser-sync", ["scripts", "styles"], function() {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		notify: false
	});
});

gulp.task("watch", function() {
	gulp.watch("sass/*.sass", ["styles"]);
	gulp.watch("learn/**/*.js", ["scripts"]);
	gulp.watch("js/*.js").on("change", browserSync.reload);
	gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["browser-sync", "watch"]);