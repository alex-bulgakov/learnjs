var gulp				= require("gulp"),
		rename			=	require("gulp-rename"),
		browserSync = require("browser-sync").create(),
		concat			= require("gulp-concat");

gulp.task("scripts", function() {
	return gulp.src([
			"./learn/**/*.js"
		])
		.pipe(concat("main.js"))
		.pipe(gulp.dest("./js/"));
});

gulp.task("browser-sync", ["scripts"], function() {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		notify: false
	});
});

gulp.task("watch", function() {
	gulp.watch("learn/**/*.js", ["scripts"]);
	gulp.watch("js/*.js").on("change", browserSync.reload);
	gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["browser-sync", "watch"]);