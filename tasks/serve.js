import gulp from 'gulp';
import connect from 'gulp-connect';
import {
  SERVER_PORT,
  BUILD_DIR,
  LIVE_RELOAD,
} from './constants';


export const SERVE_TASK = 'serve';


/**
 * Run a simple HTTP server for serving compiled, static assets.
 */
gulp.task(SERVE_TASK, function serve() {
  return connect.server({
    port: SERVER_PORT,
    root: BUILD_DIR,
    livereload: LIVE_RELOAD,
  });
});
