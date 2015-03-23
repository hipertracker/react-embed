var require = {
    waitSeconds: 200,
    baseUrl: '/static_files/v2/',
    paths: {
        babel: 'vendor/requirejs_babel/babel-4.7.12.min',
        babel_polyfill: 'vendor/requirejs_babel/polyfill-4.7.12.min',
        es6: 'vendor/requirejs_babel/es6',

        react: 'vendor/react/react-with-addons',
        reflux: 'vendor/reflux/dist/reflux.min',
        lodash: 'vendor/lodash/lodash.min',
        app: '/static_files/v2/apps/datatable/app'
    },
    shim: {
        babel: {
            deps: ['babel_polyfill']
        }
    }
};
