import Reflux from 'reflux'
import DataTableActions from 'es6!../actions/DataTableActions'

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
        this.trigger({resort: _.merge(data, {order: order})});
    }
});
