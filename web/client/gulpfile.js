var gulp = require('gulp');
var babel = require('gulp-babel');
var react = require('gulp-react');
var notify = require('gulp-notify');
var print = require('gulp-print');
var jasmine = require('gulp-jasmine');


var test = 'test';


gulp.task(test, function () {
    gulp.src('./test/**/*.js')
        .pipe(react())
        .pipe(babel({
            presets: ["babel-preset-es2015", "react"]
        }))
        .pipe(print())
        .pipe(jasmine())
        .pipe(notify('done!!'))
});


gulp.task('default', [test]);