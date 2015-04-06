import Reflux from 'reflux'
import DataTableActions from 'es6!app/actions/DataTableActions'

export default Reflux.createStore({
    listenables: [DataTableActions],
    onLoadDataSuccess(data) {
        this.trigger(data);
    }
});
