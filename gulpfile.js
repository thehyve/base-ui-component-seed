/**
 * Copyright (c) 2016 The Hyve B.V.
 * This code is licensed under the GNU General Public License,
 * version 3, or (at your option) any later version.
 */
'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var DEST = './dist/';

gulp.task('default', function() {
    return gulp.src('my-directive.js')
        // This will output the non-minified version
        .pipe(gulp.dest(DEST))
        // This will minify and rename to *.min.js
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(DEST));
});
