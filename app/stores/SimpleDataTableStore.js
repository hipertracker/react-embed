import _ from 'lodash'
import Reflux from 'reflux'
import DataTableActions from 'es6!app/actions/SimpleDataTableActions'

export default Reflux.createStore({
    listenables: [DataTableActions],
    onLoadDataSuccess(data) {
        this.trigger(data);
    },
    onResort(data) {
        let order;
        switch (data.order) {
            case null:
                order = 'asc';
                break;
            case 'asc':
                order = 'desc';
                break;
            case 'desc':
                order = 'asc';
                break;
        }
        this.trigger({sortedColumn: _.merge(data, {order: order})});
    },
    onFilterSuccess(data) {
        const {api, value} = data.filter;
        const rows = _.filter(data.loaded.rows, (row) =>
            row[api].toString().toLowerCase().search(value.toLowerCase()) !== -1
        );
        this.trigger({filtered: rows});
    }
});
