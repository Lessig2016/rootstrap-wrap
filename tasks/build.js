import gulp from 'gulp';
import runSequence from 'run-sequence';
import {CLEAN_TASK} from './clean';
import {BUILD_STYLES_TASK} from './build-styles';
import {COPY_SCRIPTS_TASK} from './copy-scripts';
import {COPY_FONTS_TASK} from './copy-fonts';
import {COPY_ASSETS_TASK} from './copy-assets';


export const BUILD_TASK = 'build';


/**
 * Clean previous build and perform a complete build.
 */
gulp.task(BUILD_TASK, function build(done) {
  runSequence(CLEAN_TASK, [
    BUILD_STYLES_TASK,
    COPY_SCRIPTS_TASK,
    COPY_FONTS_TASK,
    COPY_ASSETS_TASK,
  ], done);
});
