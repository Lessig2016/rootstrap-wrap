export const PUBLIC_DIR = 'public';
export const BUILD_DIR = 'build';

// CSS
export const BOOTSTRAP_DIR = 'bootstrap';
export const BOOTSTRAP_LESS_DIR = `${BOOTSTRAP_DIR}/less`;
export const BOOTSTRAP_LESS_WATCH = `${BOOTSTRAP_LESS_DIR}/**/*.less`;
export const BOOTSTRAP_SRC = `${BOOTSTRAP_LESS_DIR}/bootstrap.less`;
export const BOOTSTRAP_CSS = 'bootstrap.css';
export const BOOTSTRAP_THEME_SRC = `${BOOTSTRAP_LESS_DIR}/theme.less`;
export const BOOTSTRAP_THEME_CSS = 'bootstrap-theme.css';
export const CSS_DEST = `${BUILD_DIR}/css`;
export const BOOTSTRAP_JS_DIR = `${BOOTSTRAP_DIR}/js`;
export const BOOTSTRAP_JS_SRC = `${BOOTSTRAP_JS_DIR}/*.js`;
export const JS_DEST = `${BUILD_DIR}/js`;
export const BOOTSTRAP_FONTS_DIR = `${BOOTSTRAP_DIR}/fonts`;
export const BOOTSTRAP_FONTS_SRC = `${BOOTSTRAP_FONTS_DIR}/*`;
export const FONTS_DEST = `${BUILD_DIR}/fonts`;

// Assets
export const ASSETS_SRC = `${PUBLIC_DIR}/**/*`;

// Server
export const SERVER_PORT = 8440;
export const LIVE_RELOAD = true;
