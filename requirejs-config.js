var require = {
    waitSeconds: 200,
    baseUrl: './',
    paths: {
        babel: 'vendor/requirejs_babel/babel-4.7.8.min',
        babel_polyfill: 'vendor/requirejs_babel/browser-polyfill',
        es6: 'vendor/requirejs_babel/es6',

        // for stupid IE9
        'es5-shim': 'vendor/es5-shim/es5-shim.min',
        'es5-sham': 'vendor/es5-shim/es5-sham.min',

        react: 'vendor/react/react-with-addons',
        app: './app'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill', 'es5-shim', 'es5-sham']
        }
    }
};
