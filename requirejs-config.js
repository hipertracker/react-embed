var require = {
    waitSeconds: 200,
    baseUrl: './',
    paths: {
        babel: 'vendor/requirejs_babel/babel.min',
        babel_polyfill: 'vendor/requirejs_babel/polyfill.min',
        es6: 'vendor/requirejs_babel/es6',

        react: 'vendor/react/react-with-addons',
        classnames: 'vendor/classnames/index',
        reflux: 'vendor/reflux/dist/reflux.min',

        jquery: 'vendor/jquery/dist/jquery.min',
        amplify: 'vendor/amplify/lib/amplify.min',
        lodash: 'vendor/lodash/lodash.min',
        immutable: 'vendor/immutable/dist/immutable.min',
        bootstrap: 'vendor/react_bootstrap/react-bootstrap.min',

        app: 'app'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill']
        },
        bootstrap: {
            deps: ['react']
        },
        amplify: {
            deps: ['jquery']
        }
    }
};

