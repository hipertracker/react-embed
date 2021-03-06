import React from 'react'
import HelloWorld from 'es6!app/components/HelloWorld'
import Messenger from 'es6!app/components/communicator/App'
import SimpleDataTable from 'es6!app/components/SimpleDataTable'
import DataTable from 'es6!app/components/DataTable'

var mount = function (componentPath, placeholder) {
    var component = React.createElement(componentPath);
    React.render(component, placeholder);
};

mount(HelloWorld, document.getElementById('HelloWorld'));
mount(Messenger, document.getElementById('Messenger'));
mount(SimpleDataTable, document.getElementById('SimpleDataTable'));
mount(DataTable, document.getElementById('DataTable'));


