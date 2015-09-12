import gulp from 'gulp';
import {
  BOOTSTRAP_FONTS_SRC,
  FONTS_DEST,
} from './constants';


export const COPY_FONTS_TASK = 'copy-fonts';


/**
 * Copy Bootstrap fonts.
 */
gulp.task(COPY_FONTS_TASK, function copyFonts() {
  return gulp.src(BOOTSTRAP_FONTS_SRC)
    .pipe(gulp.dest(FONTS_DEST));
});
