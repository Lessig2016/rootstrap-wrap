import gulp from 'gulp';
import {
  ASSETS_SRC,
  BOOTSTRAP_LESS_WATCH,
} from './constants';
import {COPY_ASSETS_TASK} from './copy-assets';
import {BUILD_STYLES_TASK} from './build-styles';


export const WATCH_TASK = 'watch';


/**
 * Watch asset and CSS directories and perform the respective tasks on change.
 */
gulp.task(WATCH_TASK, function watchPublic() {
  gulp.watch([ASSETS_SRC], [COPY_ASSETS_TASK]);
  gulp.watch([BOOTSTRAP_LESS_WATCH], [BUILD_STYLES_TASK]);
});
