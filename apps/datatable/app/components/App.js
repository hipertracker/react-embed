import React from 'react'
import Reflux from 'reflux'
import {Amplify} from 'es6!app/config'
//import Immutable from 'immutable'

import data from 'es6!./mock-data'

const loadData = Reflux.createAction();

const store = Reflux.createStore({
    init() {
        this.listenTo(loadData, this.onLoadData)
    },
    onLoadData() {
        this.trigger(data)
    }
});

class Th extends React.Component {
    render() {
    }
}

class THead extends React.Component {
    render() {
    let fields = this.props.header || [];
        return (
            <thead>
            <tr>
                {fields.map(item => {
                    <th>{item.label}</th>
                })}
            </tr>
            </thead>
        )
    }
}

class TBody extends React.Component {
    render() {
        return (
            <tbody>
            </tbody>
        )
    }
}

class TFooter extends React.Component {
    render() {
        return (
            <tfooter>
            </tfooter>
        )
    }
}

class Datatable extends React.Component {
    constructor() {
        store.listen(function (d) {
            console.log('DATA', d);
           this.setState({head: d.head, body: d.body})
        });
    }
    getInitialState() {
        return {}
    }
    componentDidMount() {
        loadData();
    }
    render() {
        console.log(this.state);
        return (
            <section>
                <table>
                    <THead/>
                    <TBody/>
                    <TFooter/>
                </table>
            </section>
        );
    }
};

export default Datatable;
