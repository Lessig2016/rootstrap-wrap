import gulp from 'gulp';
import rimraf from 'gulp-rimraf';
import {BUILD_DIR} from './constants';


export const CLEAN_TASK = 'clean';


/**
 * Clean build directory.
 */
gulp.task(CLEAN_TASK, function clean() {
  return gulp.src(BUILD_DIR, { read: false })
    .pipe(rimraf());
});
