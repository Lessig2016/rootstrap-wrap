import gulp from 'gulp';
import runSequence from 'run-sequence';
import {BUILD_TASK} from './build';
import {SERVE_TASK} from './serve';
import {WATCH_TASK} from './watch';


export const DEVELOP_TASK = 'develop';


/**
 * Compound task which performs clean, build, serve and watch tasks.
 */
gulp.task(DEVELOP_TASK, function develop(done) {
  runSequence(BUILD_TASK, SERVE_TASK, WATCH_TASK, done);
});
