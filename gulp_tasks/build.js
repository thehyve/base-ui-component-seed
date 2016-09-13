/**
 * Copyright (c) 2016 The Hyve B.V.
 * This code is licensed under the GNU General Public License,
 * version 3, or (at your option) any later version.
 */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const conf = require('../conf/gulp.conf');
const ngAnnotate = require('gulp-ng-annotate');

gulp.task('build', build);

function build() {
    return gulp.src(conf.path.tmp('**/*.js'))
        .pipe(ngAnnotate())
        .pipe(concat('my-module.js'))
        .pipe(uglify())
        .pipe(rename({extname: '.min.js' }))
        .pipe(gulp.dest(conf.path.dist()));
}