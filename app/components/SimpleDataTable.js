import _ from 'lodash'
import React from 'react'
import Reflux from 'reflux'
import Immutable from 'immutable'
import 'classnames'
import ReactBootstrap from 'react-bootstrap'

const T = React.PropTypes;

const {Table} = ReactBootstrap;

import SimpleDataTableActions from 'es6!app/actions/SimpleDataTableActions'
import SimpleDataTableStore from 'es6!app/stores/SimpleDataTableStore'

const Th = React.createClass({
    getDefaultProps() {
        return {order: null};
    },
    resort() {
        SimpleDataTableActions.resort(this.props);
    },
    render() {
        let classes = classNames(
            'fa',
            {'fa-sort': this.props.order === null},
            {'fa-sort-asc': this.props.order === 'asc'},
            {'fa-sort-desc': this.props.order === 'desc'}
        );
        return (
            <th onClick={this.resort} style={{cursor:'pointer'}}>
                {this.props.label} <i className={classes} style={{marginLeft:5}}></i>
            </th>
        );
    }
});

const Filter = React.createClass({
    mixins: [React.addons.LinkedStateMixin],
    propTypes: {
        api: T.string.isRequired
    },
    getInitialState() {
        return {value: ''};
    },
    handleChange(event) {
        this.setState({value: event.target.value});
        SimpleDataTableActions.filter({api: this.props.api, value: event.target.value})
    },
    render() {
        return <input ref="filterInput" type="text" className="form-control input-sm"
                      value={this.state.value}
                      placeholder="filter..."
                      onChange={this.handleChange}/>;
    }
});

const THead = React.createClass({
    propTypes: {
        columns: T.array.isRequired,
        sortedColumn: T.oneOfType([
            T.object,
            T.shape({
                api: T.string.isRequired,
                label: T.string.isRequired,
                order: T.string
            })])
    },
    render() {
        const columns = this.props.columns.map((item, key) => {
            if (this.props.sortedColumn.label === item.label) {
                return <Th order={this.props.sortedColumn.order} api={item.api} label={item.label} key={key}/>
            } else {
                return <Th label={item.label} api={item.api} key={key}/>
            }
        });
        let filters = this.props.columns.map((item, key) => <th key={key}><Filter api={item.api}/></th>);
        return (
            <thead>
            <tr>{columns}</tr>
            <tr>{filters}</tr>
            </thead>
        )
    }
});

const TBody = React.createClass({
    propTypes: {
        columns: T.array.isRequired,
        rows: T.array.isRequired
    },
    render() {
        const names = _.pluck(this.props.columns, 'api');
        return (
            <tbody>
            {this.props.rows.map((row, key) =>
                    <tr key={key}>
                        {names.map((name, key2) => <td key={key2}>{row[name]}</td>)}
                    </tr>
            )}
            </tbody>
        )
    }
});

const SimpleDataTable = React.createClass({
    mixins: [Reflux.listenTo(SimpleDataTableStore, 'storeChanged')],
    getInitialState() {
        return {columns: null, rows: null, sortedColumn: null}
    },
    componentWillMount() {
        SimpleDataTableActions.loadData();
    },
    storeChanged(data) {
        if (_.has(data, 'loaded')) {
            let item = data.loaded;
            this.setState({columns: item.columns, rows: item.rows});
        }
        if (_.has(data, 'sortedColumn')) {
            let item = data.sortedColumn;
            this.setState({
                sortedColumn: item,
                rows: _.sortByOrder(this.state.rows, [item.api], [item.order === 'asc'])
            });
        }
        if (_.has(data, 'filtered')) {
            let rows = data.filtered;
            this.setState({rows: rows, sortedColumn: null});
        }
    },
    render() {
        if (!this.state.columns) return <span/>;
        return (
            <Table striped bordered condensed hover>
                <THead sortedColumn={this.state.sortedColumn || {}}
                       columns={this.state.columns}/>
                <TBody columns={this.state.columns}
                       rows={this.state.rows}/>
            </Table>
        );
    }
});


export default SimpleDataTable
