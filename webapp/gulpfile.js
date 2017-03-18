var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
//静态服务器
gulp.task('serve', function() {
    browserSync.init({
        server: "./",
        port:8020
    });
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/*.js").on('change', browserSync.reload);
});

// 代理
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "location:8020"
//     });
//     gulp.watch('./css/*.css').on('change', browserSync.reload);
//     gulp.watch("./*.html").on('change', browserSync.reload);
//     gulp.watch("./js/*.js").on('change', browserSync.reload);
// });
// 全站编译
gulp.task('default', ['serve']);
