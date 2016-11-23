
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

/**
 * Require Browsersync along with webpack and middleware for it
 */
const browserSync          = require('browser-sync').create();
const webpack              = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const stripAnsi            = require('strip-ansi');

module.exports = function(webpackConfig) {

    var bundler = webpack(webpackConfig);

    /**
     * Reload all devices when bundle is complete
     * or send a fullscreen error message to the browser instead
     */
    bundler.plugin('done', function (stats) {
        if (stats.hasErrors() || stats.hasWarnings()) {
            return browserSync.sockets.emit('fullscreen:message', {
                title: 'Webpack Error:',
                body:  stripAnsi(stats.toString()),
                timeout: 100000
            });
        }
        browserSync.reload();
    });

    return {
        ui: {
            port: 3001,
            weinre: {
                port: 8080
            }
        },
        files: [
            'app/**/*.html',
            'src/**/*.js',
            'src/**/*.jsx',
            'src/**/*.css'
        ],
        watchOptions: {},
        server: {
            baseDir: './',
            directory: true
        },
        proxy: true,
        port: 3000,
        middleware: [
            webpackDevMiddleware(bundler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {colors: true}
            })
        ],
        serveStatic: [],
        ghostMode: {
            clicks: true,
            scroll: true,
            forms: {
                submit: true,
                inputs: true,
                toggles: true
            }
        },
        logLevel: 'info',
        logPrefix: 'BS',
        logConnections: false,
        logFileChanges: true,
        logSnippet: true,
        rewriteRules: false,
        open: 'local',
        browser: 'default',
        xip: false,
        hostnameSuffix: false,
        reloadOnRestart: false,
        notify: true,
        scrollProportionally: true,
        scrollThrottle: 0,
        scrollRestoreTechnique: 'window.name',
        scrollElements: [],
        scrollElementMapping: [],
        reloadDelay: 0,
        reloadDebounce: 0,
        reloadThrottle: 0,
        plugins: [
            'bs-fullscreen-message'
        ],
        injectChanges: true,
        startPath: null,
        minify: true,
        host: null,
        localOnly: false,
        codeSync: true,
        timestamps: true,
        clientEvents: [
            'scroll',
            'scroll:element',
            'input:text',
            'input:toggles',
            'form:submit',
            'form:reset',
            'click'
        ],
        socket: {
            socketIoOptions: {
                log: false
            },
            socketIoClientConfig: {
                reconnectionAttempts: 50
            },
            path: '/browser-sync/socket.io',
            clientPath: '/browser-sync',
            namespace: '/browser-sync',
            clients: {
                heartbeatTimeout: 5000
            }
        },
        tagNames: {
            less: 'link',
            scss: 'link',
            css: 'link',
            jpg: 'img',
            jpeg: 'img',
            png: 'img',
            svg: 'img',
            gif: 'img',
            js: 'script'
        }
    };
};
