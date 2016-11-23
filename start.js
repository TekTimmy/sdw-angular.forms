
const webpackConfig        = require('./webpack.config.js');
const browserSyncConfig    = require('./browsersync.config.js')(webpackConfig);
const browserSync          = require('browser-sync').create();

browserSync.init(browserSyncConfig);
