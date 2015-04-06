import _ from 'lodash'
import React from 'react'
import Reflux from 'reflux'
import ReactBootstrap from 'react-bootstrap'
import FixedDataTable from 'fixed-data-table'

import DataTableActions from 'es6!app/actions/DataTableActions'
import DataTableStore from 'es6!app/stores/DataTableStore'

const {Table, Column} = FixedDataTable;


const DataTable = React.createClass({
    mixins: [Reflux.listenTo(DataTableStore, 'storeChanged')],
    getDefaultProps() {
        return {rows: null}
    },
    getInitialState() {
        return {rows: this.props.rows}
    },
    componentWillMount() {
        DataTableActions.loadData();
    },
    storeChanged(data) {
        if (_.has(data, 'loaded')) {
            this.setState({rows: data.loaded.rows});
        }
    },
    render() {
        if (!this.state.rows) return <span/>;

        const rowGetter = (rowIndex) => this.state.rows[rowIndex]

        return (
            <section>
                <h1>DataTable</h1>
                <Table
                    rowHeight={40}
                    rowGetter={rowGetter}
                    rowsCount={this.state.rows.length}
                    width={500}
                    height={500}
                    headerHeight={50}>
                    <Column
                        label="Col 1"
                        width={3000}
                        dataKey={0}
                        />
                    <Column
                        label="Col 2"
                        width={2000}
                        dataKey={1}
                        />
                </Table>
            </section>
        )
    }
});

export default DataTable
