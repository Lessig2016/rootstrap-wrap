import gulp from 'gulp';
import connect from 'gulp-connect';
import {
  ASSETS_SRC,
  BOOTSTRAP_LESS_WATCH,
  PUBLIC_DIR,
  BUILD_DIR,
} from './constants';


export const COPY_ASSETS_TASK = 'copy-assets';


/**
 * Copy non-compiled assets.
 */
gulp.task(COPY_ASSETS_TASK, function copyAssets() {
  const excludeBuiltAssets = [
    ASSETS_SRC,
    `!${BOOTSTRAP_LESS_WATCH}`,
  ];
  return gulp.src(excludeBuiltAssets, { base: PUBLIC_DIR })
    .pipe(gulp.dest(BUILD_DIR))
    .pipe(connect.reload());
});
