import Reflux from 'reflux'
import fixtures from 'es6!./fixtures'

const DataTableActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess',
    'resort'
]);

DataTableActions.loadData.listen(function () {
    DataTableActions.loadDataSuccess({loaded:fixtures});
});

export default DataTableActions;