import _ from 'lodash'
import React from 'react'
import Reflux from 'reflux'
import 'classnames'

import UI from 'react-bootstrap'

const T = React.PropTypes;

const Table = UI.Table;

import DataTableActions from 'es6!../actions/DataTableActions'
import DataTableStore from 'es6!../stores/DataTableStore'


const Th = React.createClass({
    getDefaultProps() {
        return {order: null};
    },
    resort() {
        DataTableActions.resort(this.props);
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
                {this.props.label}&nbsp;<i className={classes}></i>
            </th>
        );
    }
});

const THead = React.createClass({
    getDefaultProps() {
        return {resort: {}};
    },
    render() {
        let columns = this.props.columns.map((item, key) => {
            if (this.props.resort.label === item.label) {
                return <Th order={this.props.resort.order} api={item.api} label={item.label} key={key}/>
            } else {
                return <Th label={item.label} api={item.api} key={key}/>
            }
        });
        return (
            <thead>
            <tr>{columns}</tr>
            </thead>
        )
    }
});

const TBody = React.createClass({
    render() {
        return (
            <tbody>
            {this.props.rows.map((row, key) =>
                    <tr key={key}>
                        {this.props.columns.map((name, key2) =>
                                <td key={key2}>{row[name]}</td>
                        )}
                    </tr>
            )}
            </tbody>
        )
    }
});

const TFooter = React.createClass({
    render() {
        return (
            <tfooter>
            </tfooter>
        )
    }
});

const Datatable = React.createClass({
    mixins: [Reflux.listenTo(DataTableStore, 'storeChanged')],
    storeChanged(data) {
        if (_.has(data, 'loaded')) {
            this.setState({header: data.loaded.head, data: data.loaded.body});
        }
        if (_.has(data, 'resort')) {
            let rows = _.sortByOrder(this.state.data, [data.resort.api], [data.resort.order === 'asc']);
            this.setState({
                resort: data.resort,
                data: rows
            });

        }
    },
    getInitialState() {
        return {header: null, data: null}
    },
    componentDidMount() {
        DataTableActions.loadData();
    },
    render() {
        if (!this.state.header) return <span/>;
        return (
            <section>
                <Table striped bordered condensed hover>
                    <THead resort={this.state.resort} columns={this.state.header}/>
                    <TBody columns={_.pluck(this.state.header, 'api')} rows={this.state.data}/>
                    <TFooter/>
                </Table>
            </section>
        );
    }
});

export default Datatable;
