import gulp from 'gulp';
import less from 'gulp-less';
import rename from 'gulp-rename';
import connect from 'gulp-connect';
import {
  BOOTSTRAP_SRC,
  BOOTSTRAP_CSS,
  BOOTSTRAP_THEME_SRC,
  BOOTSTRAP_THEME_CSS,
  CSS_DEST,
} from './constants';


export const BUILD_STYLES_CORE_TASK = 'build-styles-core';
export const BUILD_STYLES_THEME_TASK = 'build-styles-theme';
export const BUILD_STYLES_TASK = 'build-styles';


/**
 * Build core Bootstrap CSS.
 */
gulp.task(BUILD_STYLES_CORE_TASK, function buildStylesCore() {
  return gulp.src(BOOTSTRAP_SRC)
    .pipe(less())
    .pipe(rename(BOOTSTRAP_CSS))
    .pipe(gulp.dest(CSS_DEST))
    .pipe(connect.reload());
});


/**
 * Build Bootstrap theme CSS.
 */
gulp.task(BUILD_STYLES_THEME_TASK, function buildStylesTheme() {
  return gulp.src(BOOTSTRAP_THEME_SRC)
    .pipe(less())
    .pipe(rename(BOOTSTRAP_THEME_CSS))
    .pipe(gulp.dest(CSS_DEST))
    .pipe(connect.reload());
});


/**
 * Build complete Bootstrap CSS.
 */
gulp.task(BUILD_STYLES_TASK, [
  BUILD_STYLES_CORE_TASK,
  BUILD_STYLES_THEME_TASK,
]);
