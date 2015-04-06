var require = {
    waitSeconds: 200,
    baseUrl: './',
    paths: {
        babel: 'vendor/requirejs_babel/babel',
        babel_polyfill: 'vendor/requirejs_babel/polyfill.min',
        es6: 'vendor/requirejs_babel/es6',

        react: 'vendor/react/react-with-addons',
        classnames: 'vendor/classnames/index',
        reflux: 'vendor/reflux/dist/reflux.min',
        'fixed-data-table': 'vendor/fixed_data_table/dist/fixed-data-table',
        'react-bootstrap': 'vendor/react_bootstrap/react-bootstrap.min',

        jquery: 'vendor/jquery/dist/jquery.min',
        amplify: 'vendor/amplify/lib/amplify.min',
        lodash: 'vendor/lodash/lodash.min',
        immutable: 'vendor/immutable/dist/immutable.min',

        app: 'app'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill']
        },
        'react-bootstrap': {
            deps: ['react']
        },
        amplify: {
            deps: ['jquery']
        }
    }
};

