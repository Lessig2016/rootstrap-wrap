import gulp from 'gulp';
import {
  BOOTSTRAP_JS_SRC,
  JS_DEST,
} from './constants';


export const COPY_SCRIPTS_TASK = 'copy-scripts';


/**
 * Copy Bootstrap scripts.
 */
gulp.task(COPY_SCRIPTS_TASK, function copyScripts() {
  return gulp.src(BOOTSTRAP_JS_SRC)
    .pipe(gulp.dest(JS_DEST));
});
