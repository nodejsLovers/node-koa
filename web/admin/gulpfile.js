var gulp = require('gulp');
var babel = require('gulp-babel');
var jasmine = require('gulp-jasmine');
var print = require('gulp-print');
var notify = require('gulp-notify');//提示信息


var test = 'test';

gulp.task(test, function () {
    return gulp.src('./test/admin/*.js')
        .pipe(babel({
            presets: ['babel-preset-es2015']
        }))
        .pipe(print())
        .pipe(jasmine())
        .pipe(notify("done!!"))
});


gulp.task('default', [test]);