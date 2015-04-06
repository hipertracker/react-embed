# react-embed

Example of embedding React into external, decoupled code.  The code uses only a browser and it uses ES6 modules.

## install

```
npm install
bower install
```

## issues:
 
Optimized files does not work unless the code `'es6!app/boot',` is removed from  `define('es6!app/boot', ['exports', 'react', ...` (the last AMD section inside optimize.js file) 

 
 

